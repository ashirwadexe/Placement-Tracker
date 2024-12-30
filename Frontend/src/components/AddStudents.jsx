import React from 'react'
import { Button } from './ui/button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
            <div className='mx-40 my-10'>
                <button
                    className='border px-7 py-2 rounded-full bg-white bg-opacity-10 font-semibold'
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            </div>
        </>
    )
}

export default AddStudents