import mongoose from "mongoose";

const calenderSchema = new mongoose.Schema({
    hiringDate: {
        type: Date,
        required: true
    },
    company: {
        type: String,
    },
    position: {
        type: String,
    },
    hiringType: {
        type: String,
    },
    location: {
        type: String
    }
}, {timestamps: true});

export const Calender = mongoose.model("Calender", calenderSchema);