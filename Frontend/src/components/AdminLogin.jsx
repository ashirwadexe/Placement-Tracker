import React, { useState } from 'react'
import { Input } from './ui/input'
import { LockKeyholeIcon, User } from 'lucide-react'
import { Button } from './ui/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        setAdmin({...admin, [e.target.name]: e.target.value});
    };

    const navigate = useNavigate();


    const submitHandler = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/v1/admin/login", admin,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                }
            );
            console.log(res);
            if(res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/addStudents")
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className='min-h-screen w-auto flex flex-col items-center justify-center gap-4'>
                <h1 className='text-2xl font-semibold'>Admin Login</h1>
                <div className="relative w-[350px]">
                    <Input
                        type="text"
                        placeholder="ashirwadbappy@gmail.com"
                        className=" pl-10 py-2 pr-4"
                        value={admin.email}
                        name="email"
                        onChange={handleInput}
                        required
                    />
                    <User size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="relative w-[350px]">
                    <Input
                        type="password"
                        placeholder="abc@123"
                        className=" pl-10 py-2 pr-4"
                        value={admin.password}
                        name="password"
                        onChange={handleInput}
                        required
                    />
                    <LockKeyholeIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <Button onClick={submitHandler} variant="outline" className="w-[350px] text-black font-semibold text-md">Login</Button>
            </div>
        </>
    )
}

export default AdminLogin