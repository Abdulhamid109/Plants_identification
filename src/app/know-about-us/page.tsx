"use client";
import React from 'react'
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Abdulhamid",
    designation: "Member 1",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Umer",
    designation: "Member 2",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Pradip",
    designation: "Member 3",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Pankaj",
    designation: "Member 4",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Sanket",
    designation: "Member 5",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  
];
export default function Aboutus () {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-screen p-6 h-screen rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-white mb-6">Plant Classification Dataset</h1>
  
  <a 
    href="https://www.kaggle.com/datasets/marquis03/plants-classification" 
    className="text-lg text-blue-100 underline hover:text-blue-200 transition-all duration-300 mb-8"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Go to Dataset
  </a>
  <h1 className='text-4xl m-3'>Team Members</h1>
  <div className="flex flex-row items-center justify-center w-full">
    <AnimatedTooltip items={people} />
  </div>
</div>

  )
}
