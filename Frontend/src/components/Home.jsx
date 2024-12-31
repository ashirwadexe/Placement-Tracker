import React from "react";
import Hero from "./Hero";
import Card from "./Card";
import CompanyCrousal from "./CompanyCrousal";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { CoolMode } from "./ui/cool-mode";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-9xl mx-auto flex flex-col items-center justify-center gap-5">
        <Hero />
        <div className="flex gap-2 my-5">
          <Button 
            onClick={()=> toast.success("Placement Calender is not available right now. Please check back later.")}
            className="bg-red-500 hover:bg-red-400 font-sans">
            Placement Calender
          </Button>
          <Button
            onClick={() => navigate("/all-placed-students")}
            className="bg-green-500 hover:bg-green-400 font-sans"
          >
            See All Students
          </Button>
        </div>
        <CompanyCrousal />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between m-5 px-14 mt-10">
        <div className="flex flex-wrap items-center">
          <p className="font-sans text-4xl font-bold">Recently placed students</p>
          <img
            alt="waving-hand"
            src="/waving-hand.gif"
            className="w-[30px] h-[30px] object-contain"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div>
          <CoolMode>
            <Button className="bg-white hover:bg-white text-black">Click Me to Celebrate🥳</Button>
          </CoolMode>
        </div>
      </div>

      <div className="max-w-9xl mx-auto flex flex-col items-center justify-center gap-5">
        <Card />
      </div>
    </div>
  );
};

export default Home;
