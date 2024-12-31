import React from 'react';
import '../App.css';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import img from "../assets/ashirwaddp.jpg";

const Hero = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center mt-20 gap-3'>
            <HoverCard>
              <HoverCardTrigger>
                <p className='border rounded-full px-5 py-1 bg-gray-700 text-sm text-gray-300 border-gray-400 font-semibold'>Made By: <span>  Ashirwad 🚀</span></p>
              </HoverCardTrigger>
              <HoverCardContent>
                  <a href="https://ashirwadexe.netlify.app/" target='_blank'>
                    <img 
                      src={img} 
                      alt="ashirwad"
                      className='w-[60px] h-[60px] rounded-full object-cover border-[2px] border-white/60 hover:scale-110 transform transition duration-300 ease-in-out'
                    />
                  </a>          
               </HoverCardContent> 
            </HoverCard>
            <h1 className='text-gradient text-8xl font-bold'>Placement Bro</h1>
            <p className='text-gradient text-xl font-semibold text-gray-400 '>Celebrating Our Students' Success Stories</p>
        </div>

    </>
  )
}

export default Hero


