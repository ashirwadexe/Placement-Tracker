import React from 'react'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import StudentForm from './StudentForm'

const AddStudents = () => {

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/v1/admin/logout");
            if(res.data.success) {
                localStorage.removeItem("token");  // Clear token
                sessionStorage.clear();  // Optional
                toast.success(res.data.message);
                navigate("/admin");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
        }
    }
    
    return (
        <>
            <button
                    className='border px-7 py-2 mt-10 ml-10 rounded-full bg-white bg-opacity-10 font-semibold'
                    onClick={logoutHandler}
                >
                    Logout
            </button>
            <div className='flex flex-col items-center justify-center'>
                <StudentForm/>
            </div>
        </>
    )
}

export default AddStudents