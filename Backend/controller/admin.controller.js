import { Admin } from "../model/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(404).json({
                message: "Something is missing",
                success: false
            });
        }

        const user = await Admin.findOne({email});
        if(user) {
            return res.status(401).json({
                message: "Email already exists, try another one",
                success: false
            });
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        //creating new user account here
        await Admin.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(200).json({
            message: "Account Created Successfully!",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};


//BUSINESS LOGIC FOR LOGIN
export const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        if(!email || !password) {
            return res.status(404).json({
                message: "Something is missing",
                success: false
            });
        };

        let user = await Admin.findOne({email});
        if(!user) {
            return res.status(404).json({
                message: "User Not Authorised.",
                success: false
            });
        };

        const isPassMatched = await bcrypt.compare(password, user.password);
        if(!isPassMatched) {
            return res.status(404).json({
                message: "Wrong Password",
                success: false
            });
        };

        const tokenData = {
            userId: user._id
        };

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d"});

        user = {
            _id: user._id,
            name: user.name,
            password: user.password
        };

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
            message: `Welcome ${user.name} 🥳🚀`,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

//BUSINESS LOGIC FOR LOGOUT
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: "Logout Successfully !",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}