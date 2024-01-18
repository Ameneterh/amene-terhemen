import { useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import Introduction from "../Components/Introduction";
import About from "../Components/About";
import Services from "../Components/Services";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import Header from "../Components/Header";
import SkillSet from "../Components/SkillSet";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2">
          <Introduction />
          <About />
          <SkillSet />
          <Services />
          <CallToAction />
          <Link
            to="/contact"
            className="flex items-center justify-center uppercase bg-blue-700 text-white w-[200px] h-12 hover:opacity-70 mt-5 rounded-lg mx-auto"
          >
            contact me
          </Link>
        </div>
        <div className="hidden md:block right-0">
          <ProgressBar />
          <ProfilePic />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
