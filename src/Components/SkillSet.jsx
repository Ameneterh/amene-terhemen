import React from "react";
import { Link } from "react-router-dom";

export default function SkillSet() {
  return (
    <div className="px-4 sm:px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
        <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="uppercase text-[24px] font-bold">My Skill Set</h2>
        <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center mt-6 md:mt-8 gap-8 text-center">
        <div className="h-24 w-full max-w-96 bg-black"></div>
        <div className="h-24 w-full max-w-96 bg-black"></div>
        <div className="h-24 w-full max-w-96 bg-black"></div>
      </div>
    </div>
  );
}
