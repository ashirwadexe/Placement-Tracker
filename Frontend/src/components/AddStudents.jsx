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
                toast.success(res.data.message);
                navigate("/admin");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <>
            <div className='mx-10 my-10 flex flex-col items-center justify-center'>
                <button
                    className='border px-7 py-2 rounded-full bg-white bg-opacity-10 font-semibold'
                    onClick={logoutHandler}
                >
                    Logout
                </button>
                <StudentForm/>
            </div>
        </>
    )
}

export default AddStudents