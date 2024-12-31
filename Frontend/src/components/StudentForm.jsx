import React, { useState } from 'react'
import { Input } from './ui/input'
import { BadgeCheck, BriefcaseBusinessIcon, Building2Icon, Calendar, GraduationCap, IndianRupeeIcon, Link2, LinkedinIcon, Navigation, Split, User } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import axios from 'axios'

const StudentForm = () => {

    const [student, setStudent] = useState({
        name: "",
        rollNo: "",
        collage: "",
        branch: "",
        batch: "",
        companyName: "",
        role: "",
        salary: "",
        jobType: "",
        location: "",
        companyWebsite: "",
        email: "",
        linkedin: "",
    });

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const inputHandler = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
            x: clientX - rect.left,
            y: clientY - rect.top
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const submitHandler = async () => {
        try {
            // Filter out empty fields
            const filteredStudent = Object.fromEntries(
                Object.entries(student).filter(([_, value]) => value.trim() !== "")
            );
    
            const res = await axios.post(
                "http://localhost:8080/api/v1/admin/student/createStudent",
                filteredStudent,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
    
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message);
    
                // Reset form after successful submission
                setStudent({
                    name: "",
                    rollNo: "",
                    collage: "",
                    branch: "",
                    batch: "",
                    companyName: "",
                    role: "",
                    salary: "",
                    jobType: "",
                    location: "",
                    companyWebsite: "",
                    email: "",
                    linkedin: "",
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };
    
    



    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative border p-5 rounded-xl shadow-lg transition-transform duration-300 ease-out bg-white/10 backdrop-blur-xl border-white/20"
                    style={{
                        transform: `translate(${position.x * 0.03}px, ${position.y * 0.03}px)`,
                        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))`
                    }}
                >
                <h1 className='mb-5 text-3xl font-semibold text-center'>Add Placed Student🥳</h1>

                <div className='flex flex-col items-start justify-center gap-3'>

                    <Badge className="bg-white text-black hover:bg-white">Student's Details</Badge>

                    <div className='grid grid-cols-2 gap-3'>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Ashirwad Chaurasia"
                            className="pl-10 py-2 pr-4"
                            name="name"
                            value={student.name}
                            onChange={inputHandler}
                            required
                            />
                            <User size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="number"
                            placeholder="Roll Number"
                            className="pl-10 py-2 pr-4"
                            name="rollNo"
                            value={student.rollNo}
                            onChange={inputHandler}
                            required
                            />
                            <BadgeCheck size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="KIMS, KIT, KIP"
                            className="pl-10 py-2 pr-4"
                            name="collage"
                            value={student.collage}
                            onChange={inputHandler}
                            required
                            />
                            <GraduationCap size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="BCA/B.Tech/MCA"
                            className="pl-10 py-2 pr-4"
                            name="branch"
                            value={student.branch}
                            onChange={inputHandler}
                            required
                            />
                            <Split size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Batch, eg. 2025"
                            className="pl-10 py-2 pr-4"
                            name="batch"
                            value={student.batch}
                            onChange={inputHandler}
                            required
                            />
                            <Calendar size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    <Badge className="bg-white text-black hover:bg-white">Company's Details</Badge>

                    <div className='grid grid-cols-2 gap-3'>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Company"
                            className="pl-10 py-2 pr-4"
                            name="companyName"
                            value={student.companyName}
                            onChange={inputHandler}
                            required
                            />
                            <Building2Icon size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Role, eg. Developer, BDE"
                            className="pl-10 py-2 pr-4"
                            name="role"
                            value={student.role}
                            onChange={inputHandler}
                            required
                            />
                            <User size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Full-Time, Internship, Remote"
                            name="jobType"
                            value={student.jobType}
                            onChange={inputHandler}
                            className="pl-10 py-2 pr-4"
                            required
                            />
                            <BriefcaseBusinessIcon size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Location"
                            className="pl-10 py-2 pr-4"
                            name="location"
                            value={student.location}
                            onChange={inputHandler}
                            required
                            />
                            <Navigation size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="text"
                            placeholder="Package"
                            className="pl-10 py-2 pr-4"
                            name="salary"
                            value={student.salary}
                            onChange={inputHandler}
                            required
                            />
                            <IndianRupeeIcon size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    <Badge className="bg-white text-black hover:bg-white">Social Links</Badge>

                    <div className='grid grid-cols-2 gap-3'>
                        <div className="relative w-[300px]">
                            <Input
                            type="url"
                            placeholder="Company Website URL"
                            className="pl-10 py-2 pr-4"
                            name="companyWebsite"
                            value={student.companyWebsite}
                            onChange={inputHandler}
                            />
                            <Link2 size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative w-[300px]">
                            <Input
                            type="url"
                            placeholder="LinkedIn URL"
                            className="pl-10 py-2 pr-4"
                            name="linkedin"
                            value={student.linkedin}
                            onChange={inputHandler}
                            />
                            <LinkedinIcon size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                </div>

                <Button onClick={submitHandler} className="w-full bg-white text-black font-semibold text-md hover:bg-gray-200 mt-4">Add Student</Button>
                </div>
            </div>
        </>
    )
}

export default StudentForm