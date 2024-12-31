import React from 'react'
import Hero from './Hero'
import Card from './Card'
import CompanyCrousal from './CompanyCrousal'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='max-w-9xl mx-auto flex flex-col items-center justify-center gap-5'>
        <Hero/>

        <div className='flex gap-3 mb-10'>
          <Button className="bg-red-500 hover:bg-white hover:text-black font-sans">Placement Calender</Button>
          <Button onClick={() => navigate("/all-placed-students")} className="bg-green-500 hover:bg-white hover:text-black font-sans">See All Students</Button>
        </div>

        <CompanyCrousal/>
        <Card/>
    </div>
  )
}

export default Home