import React, { useState } from "react";
import { Input } from "../ui/input";
import { BriefcaseBusinessIcon, BuildingIcon, Calendar1Icon, Navigation2Icon, User } from "lucide-react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDrive = () => {

    const navigate = useNavigate();
        
    const [drive, setDrive] = useState({
        hiringDate: "",
        company: "",
        position: "",
        hiringType: "",
        location: ""
    });

    const inputHandler = (e) => {
        setDrive({...drive, [e.target.name]: e.target.value});
    };

    const submitHandler = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/admin/calender/createCalender", drive, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            });
            console.log(res);
            if(res.data.success) {
                toast.success(res.data.message);
                setDrive({
                    hiringDate: "",
                    company: "",
                    position: "",
                    hiringType: "",
                    location: ""
                });
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 bg-white/1 backdrop-blur-xl shadow-2xl p-5 border border-gray-600 rounded-md">
                <h1 className="text-2xl font-bold mb-3">Upcoming Drive Details</h1>
                <div className="relative w-[300px]">
                    <Input
                        type="date"
                        placeholder="Date"
                        className="pl-10 py-2 pr-4"
                        name="hiringDate"
                        value={drive.hiringDate}
                        onChange={inputHandler}
                        required
                    />
                    <Calendar1Icon
                        size={19}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                <div className="relative w-[300px]">
                    <Input
                        type="text"
                        placeholder="Company Name"
                        className="pl-10 py-2 pr-4"
                        name="company"
                        value={drive.company}
                        onChange={inputHandler}
                        required
                    />
                    <BuildingIcon
                        size={19}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                <div className="relative w-[300px]">
                    <Input
                        type="text"
                        placeholder="Role"
                        className="pl-10 py-2 pr-4"
                        name="position"
                        value={drive.position}
                        onChange={inputHandler}
                    />
                    <User
                        size={19}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                <div className="relative w-[300px]">
                    <Input
                        type="text"
                        placeholder="Hiring Type"
                        className="pl-10 py-2 pr-4"
                        name="hiringType"
                        value={drive.hiringType}
                        onChange={inputHandler}
                    />
                    <BriefcaseBusinessIcon
                        size={19}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                <div className="relative w-[300px]">
                    <Input
                        type="text"
                        placeholder="Location"
                        className="pl-10 py-2 pr-4"
                        name="location"
                        value={drive.location}
                        onChange={inputHandler}
                    />
                    <Navigation2Icon
                        size={19}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                <Button onClick={submitHandler} className="w-full bg-white text-black font-semibold text-md hover:bg-gray-300 mt-4">Add Upcoming Drive</Button>
                <p 
                    onClick={() => navigate("/admin-dashboard")}
                    className="text-[12px] hover:underline cursor-pointer text-right"
                >Go To Dashboard</p>
            </div>
        </div>
    );
};

export default AddDrive;
