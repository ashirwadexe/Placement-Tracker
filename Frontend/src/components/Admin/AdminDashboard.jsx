import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/v1/admin/logout");
        if (res.data.success) {
            localStorage.removeItem("token"); // Clear token
            sessionStorage.clear(); // Optional
            toast.success(res.data.message);
            navigate("/admin");
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Logout failed");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
        <div className="flex gap-5">
            <Button
                className="bg-red-500 hover:bg-red-400 font-sans"
                onClick={() => navigate("/admin/add-students")}
            >
                Add Placed Student
            </Button>
            <Button 
                className="bg-green-500 hover:bg-green-400 font-sans"
                onClick={() => navigate("/admin/add-drive")}
            >
                Add New Drive
            </Button>
        </div>
        <button
            className="border px-7 py-2 mt-10 ml-10 rounded-full bg-white bg-opacity-10 font-semibold"
            onClick={logoutHandler}
        >
            Logout
        </button>
    </div>
  );
};

export default AdminDashboard;
