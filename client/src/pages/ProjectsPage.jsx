import { useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import Header from "../Components/Header";
import ProjectsComponent from "../Components/ProjectsComponent";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div>
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 min-h-screen p-4">
          {/* web dev projects */}
          <div className="flex flex-col w-full mt-2 sm:mt-8">
            <div className="flex w-full">
              <div className="flex w-full items-center">
                <div className="flex-1 border-b"></div>
                <div className="h-4 w-4 rounded-full bg-red-600 ml-1"></div>
                <h1 className="px-2 text-2xl font-bold">Web Dev Projects</h1>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-between gap-4 mt-4">
              <ProjectsComponent />
              <ProjectsComponent />
              <ProjectsComponent />
            </div>

            <Link
              to="#"
              className="text-blue-600 hover:underline my-10 w-full text-center text-sm"
            >
              View More Projects
            </Link>
          </div>

          {/* graphic designs projects */}
          <div className="flex flex-col w-full mt-2 sm:mt-8">
            <div className="flex flex-col w-full">
              <div className="flex w-full items-center">
                <h1 className="px-2 text-2xl font-bold">
                  Graphics Design Projects
                </h1>
                <div className="h-4 w-4 rounded-full bg-red-600 mr-1"></div>
                <div className="flex-1 border-b"></div>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-between gap-4 mt-4">
              <ProjectsComponent />
              <ProjectsComponent />
              <ProjectsComponent />
            </div>
            <Link
              to="#"
              className="text-blue-600 hover:underline my-10 w-full text-center text-sm"
            >
              View More Projects
            </Link>
          </div>

          {/* tutorials projects */}
          <div className="flex flex-col w-full mt-2 sm:mt-8">
            <div className="flex flex-col w-full">
              <div className="flex w-full items-center">
                <div className="flex-1 border-b"></div>
                <div className="h-4 w-4 rounded-full bg-red-600 ml-1"></div>
                <h1 className="px-2 text-2xl font-bold">Tutorials Projects</h1>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-between gap-4 mt-4">
              <ProjectsComponent />
              <ProjectsComponent />
              <ProjectsComponent />
            </div>
            <Link
              to="#"
              className="text-blue-600 hover:underline my-10 w-full text-center text-sm"
            >
              View More Projects
            </Link>
          </div>
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
