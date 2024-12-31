import React, { useState } from "react";
import "../App.css";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import img from "../assets/ashirwaddp.jpg";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const Hero = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    toast.success("Search Functionality will be added soon.");
    setSearch("");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <HoverCard>
          <HoverCardTrigger>
            <p className="border rounded-full px-5 py-1 bg-gray-700 text-sm text-gray-300 border-gray-400 font-semibold">
              Made By: <span> Ashirwad 🚀</span>
            </p>
          </HoverCardTrigger>
          <HoverCardContent>
            <a href="https://ashirwadexe.netlify.app/" target="_blank">
              <img
                src={img}
                alt="ashirwad"
                className="w-[60px] h-[60px] rounded-full object-cover border-[2px] border-white/60 hover:scale-110 transform transition duration-300 ease-in-out"
              />
            </a>
          </HoverCardContent>
        </HoverCard>
        <h1 className=" text-7xl font-bold">Placement Bro</h1>
        <p className=" text-lg font-semibold text-gray-400 ">
          Celebrating Our Students' Success Stories
        </p>
        <div className="flex w-[80%] bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border border-gray-200 rounded-full items-center gap-4 mx-auto pl-3">
          <input
            type="text"
            placeholder="Search placed students..."
            className="outline-none border-none w-full text-sm text-black"
          />
          <Button 
            className="rounded-r-full bg-red-500 hover:bg-red-400"
            onClick={handleSearch}
          >
            
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
