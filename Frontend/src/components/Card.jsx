import React, { useState } from 'react'
import img from "../assets/ashirwaddp.jpg"
import { Badge } from './ui/badge'
import { Building2Icon, Globe, Linkedin, User } from 'lucide-react'

const Card = () => {
  const std = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className='grid grid-cols-3 gap-6 mx-40'>
        {
          std.map((item, index) => {
            const [position, setPosition] = useState({ x: 0, y: 0 });

            const handleMouseMove = (e) => {
              const { clientX, clientY } = e;
              const rect = e.currentTarget.getBoundingClientRect();
              
              setPosition({
                x: clientX - rect.left,
                y: clientY - rect.top
              });
            };

            const handleMouseLeave = () => {
              setPosition({ x: 0, y: 0 });  // Reset position when mouse leaves
            };

            return (
              <div 
                key={index}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className='relative flex items-start justify-center gap-3 flex-col p-5 rounded-xl cursor-pointer transition-transform duration-300 ease-out bg-white/10 backdrop-blur-xl shadow-2xl border-[2px] border-white/10'
                style={{
                  transform: `translate(${position.x * 0.03}px, ${position.y * 0.03}px)`,
                  background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))`
                }}
              >
                <div className='flex items-center justify-center gap-3 '>
                  <div className='w-[130px] border-[1px] border-white/30 rounded-lg overflow-hidden'>
                    <img src={img} alt="student-img" className='w-full object-cover'/>
                  </div>
                  <div>
                    <Badge className='bg-white/20 text-white shadow-sm'>
                      <User size={14} className='mr-1' /> Student Details
                    </Badge>
                    <p className='text-lg font-semibold text-white leading-tight mt-2'>Ashirwad Chaurasia</p>
                    <p className='text-sm text-gray-300'>12323407033</p>
                    <p className='text-sm text-gray-300'>BCA</p>
                    <p className='text-sm text-gray-300'>KIMS, Varanasi</p>
                    <p className='text-sm text-gray-300'>2022-2025</p>
                  </div>
                </div>
                
                {/* ---COMPANY DETAILS--- */}
                <div>
                  <Badge className='bg-white/20 text-white shadow-sm'>
                    <Building2Icon size={14} className='mr-2' /> Company Details
                  </Badge>
                  <p className='text-lg font-semibold text-white leading-tight mt-2'>Arivani Technologies Pvt. Ltd.</p>
                  <p className='text-sm text-gray-300'>Software Developer</p>
                  <p className='text-sm text-gray-300'>3 LPA</p>
                  <p className='text-sm text-gray-300'>Full Time</p>
                  <p className='text-sm text-gray-300'>Lucknow</p>
                </div>

                {/* Live Links */}
                <div className='flex gap-3'>
                  <a href="#" target='_blank'>
                    <Badge className='bg-white/20 text-white shadow-sm'>
                      <Globe size={14} className='mr-2' />Website
                    </Badge>
                  </a>
                  <a href="#" target='_blank'>
                    <Badge className='bg-white/20 text-white shadow-sm'>
                      <Linkedin size={14} className='mr-2' />LinkedIn
                    </Badge>
                  </a>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

export default Card
