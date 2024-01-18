import React from "react";
import Strings from "../Shared/Strings";
// import { ABOUT_HEADING } from "../Shared/Strings";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export default function About() {
  return (
    <div className="mt-6 md:mt-12 px-6 md:px-44 text-center flex flex-col items-center">
      <h2 className="sm:text-[20px] md:text-[40px] font-bold">
        Hi! I am ameneterh,
        <br />a Frontend Developer and
        <br /> Graphics Designer based in Kaduna, Nigeria
      </h2>
      <BiSolidQuoteAltLeft className="bg-green-500 p-3 mt-6 text-[38px] rounded-full text-white" />
      <h2 className="w-full my-5 text-slate-700 dark:text-slate-400 text-[16px]">
        {Strings.ABOUT_DESC}
      </h2>
      <BiSolidQuoteAltRight className="bg-green-500 p-3 text-[44px] rounded-full text-white" />
    </div>
  );
}
