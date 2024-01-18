import React from "react";

export default function Introduction() {
  return (
    <div className="w-full flex justify-center flex-col items-center text-center">
      <div className="h-[80px] border-r-[3px]"></div>
      <div className="w-[10px] h-[10px] bg-green-700 rounded-full"></div>
      <h2 className="uppercase mt-5 text-black dark:text-slate-400 font-medium sm:text-[13px] tracking-widest">
        hello! my name is
      </h2>
      <h2 className="uppercase text-[40px] md:text-[70px] font-bold text-black tracking-widest leading-[60px] md:leading-[80px] mt-5">
        amene<span className="block">terhemen</span>
      </h2>
      <h2 className="uppercase mt-5 text-gray-600 dark:text-slate-300 font-medium text-[13px] tracking-widest">
        frontend dev, graphics designer
      </h2>
      <img
        src="/ameneindex.jpg"
        className="w-[200px] h-[200px] p-4 bg-gray-400 rounded-full mt-5"
      />
    </div>
  );
}
