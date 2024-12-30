import { Admin } from "../model/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const existingUser = await Admin.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "Email already exists, try another one",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin account
        const newUser = await Admin.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "Account Created Successfully!",
            success: true
        });

    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

// LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required",
                success: false
            });
        }

        const user = await Admin.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        };

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,  // 1 day
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            })
            .json({
                message: `Welcome ${user.name} 🥳🚀`,
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

// LOGOUT
export const logout = async (req, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", {
                maxAge: 0,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            })
            .json({
                message: "Logout Successfully!",
                success: true
            });

    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
