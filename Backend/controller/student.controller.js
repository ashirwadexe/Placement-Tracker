import { Student } from "../model/student.model.js";

//BUSINESS LOGIC TO CREATE PLACED STUDENT's CARD
export const createStudent = async (req, res) => {
    try {
        const { name, rollNo, branch, collage, companyName, role, jobType, linkedin, companyWebsite, email, location, batch, salary } = req.body;
        const userId = req.id;

        if(!name || !rollNo || !collage || !branch || !companyName || !role || !jobType || !linkedin || !companyWebsite || !email || !location || !batch || !salary) {
            return res.status(404).json({
                message: "Something is missing 🧐",
                success: false
            });
        }

        //creating new student card
        const studentCard = await Student.create({ 
            name, 
            rollNo, 
            branch, 
            collage, 
            companyName, 
            role, jobType, 
            linkedin, 
            companyWebsite, 
            email, 
            location, 
            batch, 
            salary,
            user: userId
        });

        return res.status(200).json({
            message: "Student Added 🚀",
            success: true,
            studentCard
        });

    } catch (error) {
        console.log(error);
    }
};