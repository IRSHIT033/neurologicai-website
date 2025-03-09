'use client'
import React from "react";
// import {motion} from 'framer-motion'
import Timeline from "@/components/ui/about/timeline";

export default function page() {
  return (
    <div className="flex items-center justify-between max-w-5xl mx-auto h-screen">
      <h1 className="text-gradient text-5xl ">Timeline</h1>
      <div className="w-[766px] relative flex"
      
      >
        <Timeline />
      </div>
    </div>
  );
}

