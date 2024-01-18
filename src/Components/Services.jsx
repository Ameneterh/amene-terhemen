import React from "react";
import Strings from "../Shared/Strings";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTEND,
      desc: Strings.FRONTEND_DESC,
      logo: "/ui-ux-design.png",
    },
    {
      id: 2,
      title: Strings.GRAPHICS,
      desc: Strings.GRAPHICS_DESC,
      logo: "/backend.png",
    },
    {
      id: 3,
      title: Strings.COACHING,
      desc: Strings.COACHING_DESC,
      logo: "/teaching.png",
    },
  ];

  return (
    <div className="px-4 sm:px-12 mt-12">
      <div className="flex items-center w-full">
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
        <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="uppercase text-[24px] font-bold">services</h2>
        <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-6 md:mt-8 gap-8">
        {servicesList.map((item) => (
          <div
            key={item.id}
            className="text-center flex flex-col justify-between items-center gap-3 w-full max-w-96"
          >
            <div className="bg-gray-200 rounded-full w-[80px] h=[80px]">
              <img
                src={item.logo}
                className="w-[80px] h=[80px] p-5 hover:scale-125 transition-all ease-in-out cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <h2 className="text-slate-700 dark:text-slate-400">{item.desc}</h2>
            <IoArrowForwardOutline className="bg-green-500 text-[35px] text-white rounded-full cursor-pointer hover:scale-125 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}
