import { PlacementCalender } from "../model/calender.model.js";

export const createCalender = async (req, res) => {
    try {
        const {hiringDate, company, position, hiringType, location} = req.body;
        const userId = req.id;

        if(!hiringDate || !company || !position || !hiringType || !location) {
            return res.status(404).json({
                message: "Something is Missing!",
                success: false
            });
        };

        const newCalender = await PlacementCalender.create({
            hiringDate,
            company,
            position,
            hiringType,
            location,
            user: userId
        });

        return res.status(200).json({
            message: "Calender Created!",
            success: true,
            newCalender
        });

    } catch (error) {
        console.log(error);
    }
};

export const getAllCalenders = async (req, res) => {
    try {
        const calenders = await PlacementCalender.find();

        return res.status(200).json({
            success: true,
            calenders
        });

    } catch (error) {
        console.log(error);
    }
};

export const deleteCalender = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.id;

        const calender = await PlacementCalender.findById(id);

        if(calender.user.toString() !== userId) {
            return res.status(401).json({
                message: "You are not authorized to delete this calender!",
                success: false
            });
        };
        await PlacementCalender.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Calender Deleted!",
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};