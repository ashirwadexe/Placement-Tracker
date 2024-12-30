import React, { useState } from 'react';
import { Input } from './ui/input';
import { LockKeyholeIcon, User } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: ""
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleInput = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
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
    setPosition({ x: 0, y: 0 }); // Reset position when mouse leaves
  };

  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/admin/login", admin, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/addStudents");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className='min-h-screen w-auto flex flex-col items-center justify-center'>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative p-8 w-[350px] flex flex-col items-center justify-center rounded-xl transition-transform duration-300 ease-out bg-white/10 backdrop-blur-xl shadow-2xl border-[2px] border-white/20"
          style={{
            transform: `translate(${position.x * 0.03}px, ${position.y * 0.03}px)`,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))`
          }}
        >
          <h1 className='text-2xl font-semibold text-white'>Admin Login</h1>
          <div className="relative w-[300px] mt-4">
            <Input
              type="text"
              placeholder="ashirwadbappy@gmail.com"
              className="pl-10 py-2 pr-4 "
              value={admin.email}
              name="email"
              onChange={handleInput}
              required
            />
            <User size={19} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative w-[300px] mt-4">
                <Input
                type="password"
                placeholder="abc@123"
                className="pl-10 py-2 pr-4"
                value={admin.password}
                name="password"
                onChange={handleInput}
                required
                />
                <LockKeyholeIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <Button onClick={submitHandler} variant="outline" className="w-[300px] text-black font-semibold text-md mt-4">
                Login
            </Button>
            <div className='mt-2 flex text-xs underline w-full justify-end hover:text-gray-300'>
                <Link className='text-right' to={"/"}>Back to Home Page</Link>
            </div>
            <p className='mt-6 text-xs text-gray-400 text-center'>**Only admin can login, unauthorized person should get banned if try to login.</p>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
