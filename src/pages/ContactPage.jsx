import { useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread, MdAddCall } from "react-icons/md";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import ContactPoints from "../Components/ContactPoints";

export default function ContactPage() {
  return (
    <div>
      {/* <Header /> */}
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 min-h-screen">
          <CallToAction />
          <div className="max-w-3xl min-h-[150px] mx-auto mt-8 px-2 sm:px-8 pt-4">
            <div className="flex items-center mb-4 sm:mb-8">
              <div className="border-t-2 flex-1"></div>
              <div className="h-4 w-4 mx-2 bg-green-400 rounded-full"></div>
              <div className="border-t-2 flex-1"></div>
            </div>
            <h1 className="text-center text-2xl font-semibold mb-4">
              Get in touch through:
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <ContactPoints
                title="Email"
                url="mailto:ameneterh@gmail.com"
                smavatar={<MdOutlineMarkEmailUnread className="text-2xl" />}
              />
              <ContactPoints
                title="WhatsApp"
                url="https://wa.me/+2348154230654"
                smavatar={<FaWhatsapp className="text-2xl" />}
              />
              <ContactPoints
                title="Call"
                url="tel:+2348154230654"
                smavatar={<MdAddCall className="text-2xl" />}
              />
              <ContactPoints
                title="Twitter"
                url="https://www.twitter.com/ameneterh"
                smavatar={<FaTwitter className="text-2xl" />}
              />
            </div>
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
