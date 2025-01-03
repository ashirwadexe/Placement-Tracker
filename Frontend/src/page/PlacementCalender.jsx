import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PlacementCalender = () => {

  const [drive, setDrive] = useState([]);

  useEffect(() => {
    const getPlacementCalender = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/admin/calender/getAllCalender");
        console.log(res);
        if(res.data.success) {
          setDrive(res.data.calenders);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getPlacementCalender();
  }, []);


  return (
    <>
      <div className="max-w-7xl mx-auto my-10 flex flex-col items-center justify-center gap-5">
        <p className="border rounded-full px-5 py-1 bg-gray-700 text-sm text-gray-300 border-gray-400 font-semibold">
          Placement Calender 🚀
        </p>
        <h1 className="text-5xl font-bold">Upcoming Drives</h1>

        <div className="border border-gray-600 rounded-md p-5 w-full mt-10 bg-white/1 backdrop-blur-xl shadow-2xl hover:bg-none">
          <Table>
            <TableCaption>A list of your recent Drives.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Date</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Hiring Type</TableHead>
                <TableHead className="text-right">Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                drive.map((data) => (
                  <TableRow key={data._id}>
                  <TableCell className="font-medium">{new Date(data.hiringDate).toLocaleDateString()}</TableCell>
                  <TableCell>{data.company}</TableCell>
                  <TableCell>{data.position}</TableCell>
                  <TableCell>{data.hiringType}</TableCell>
                  <TableCell className="text-right">{data.location}</TableCell>
                </TableRow>
                ))               
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PlacementCalender;
