import React, { useEffect, useState } from 'react';
import img from "../assets/ashirwaddp.jpg";
import { Badge } from './ui/badge';
import { Building2Icon, Globe, Linkedin, MailsIcon, User } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AllPlacedStudents = () => {
  const [studentCard, setStudentCard] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/admin/student/getAllStudents");
        if(res.data.success) {
          setStudentCard(res.data.students);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchStudents();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    const dx = e.clientX - left;
    const dy = e.clientY - top;

    card.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
    card.style.transition = 'transform 0.1s ease-out';
    card.style.setProperty('--x', `${dx}px`);
    card.style.setProperty('--y', `${dy}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'transform 0.5s ease-out';
  };

  return (
    <div className='grid grid-cols-3 gap-6 mx-40'>
      {studentCard.map((c) => (
        <div 
          key={c._id}
          className='relative flex items-start justify-center gap-3 flex-col p-5 rounded-xl cursor-pointer bg-white/10 backdrop-blur-xl shadow-2xl border-[2px] border-white/10 hover:shadow-3xl hover:scale-[1.02] glow-effect'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flex items-center justify-center gap-3 '>
            <div className='w-[130px] border-[1px] border-white/30 rounded-lg overflow-hidden'>
              <img src={img} alt="student-img" className='w-full object-cover'/>
            </div>
            <div>
              <Badge className='bg-white/20 text-white shadow-sm'>
                <User size={14} className='mr-1' /> Student Details
              </Badge>
              <p className='text-lg font-semibold text-white leading-tight mt-2'>{c.name}</p>
              <p className='text-sm text-gray-300'>{c.rollNo}</p>
              <p className='text-sm text-gray-300'>{c.branch}</p>
              <p className='text-sm text-gray-300'>{c.collage}</p>
              <p className='text-sm text-gray-300'>{c.batch}</p>
            </div>
          </div>
          <div>
            <Badge className='bg-white/20 text-white shadow-sm'>
              <Building2Icon size={14} className='mr-2' /> Company Details
            </Badge>
            <p className='text-lg font-semibold text-white leading-tight mt-2'>{c.companyName}</p>
            <p className='text-sm text-gray-300'>{c.role}</p>
            <p className='text-sm text-gray-300'>{c.salary} LPA</p>
            <p className='text-sm text-gray-300'>{c.jobType}</p>
            <p className='text-sm text-gray-300'>{c.location}</p>
          </div>
          <div className='flex gap-3'>
            <a href={c.companyWebsite} target='_blank'>
              <Badge className='bg-white/20 text-white shadow-sm'>
                <Globe size={14} className='mr-2' />Website
              </Badge>
            </a>
            <a href={c.linkedin} target='_blank'>
              <Badge className='bg-white/20 text-white shadow-sm'>
                <Linkedin size={14} className='mr-2' />LinkedIn
              </Badge>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPlacedStudents;

/* CSS */
const style = document.createElement('style');
style.innerHTML = `
  .glow-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.2), transparent 50%);
    border-radius: inherit;
    z-index: -1;
    transition: opacity 0.3s;
    opacity: 0;
  }

  .glow-effect:hover::before {
    opacity: 1;
  }
`;
document.head.appendChild(style);
