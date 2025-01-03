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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
}, {timestamps: true});

export const PlacementCalender = mongoose.model("PlacementCalender", calenderSchema);