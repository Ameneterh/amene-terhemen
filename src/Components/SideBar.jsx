import React from "react";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="w-12 sm:w-[90px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center bg-white dark:bg-slate-900">
      <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <IoLogoGithub className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        <IoLogoYoutube className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        <IoLogoLinkedin className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        <IoLogoTwitter className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
      </div>
    </div>
  );
}
