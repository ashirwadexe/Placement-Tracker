import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    batch: {
        type: Number,
        required: true
    },
    collage: {
        type: String,
        required: true
    },
    companyName: {
        type: String,  // Fixed to String
        required: true
    },
    role: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: false,
        match: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/,
    },
    companyWebsite: {
        type: String,
        required: false,
        match: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
    },
    email: {
        type: String,
        required: false,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    location: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
}, { timestamps: true });

export const Student = mongoose.model("Student", studentSchema);
