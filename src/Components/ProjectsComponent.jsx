import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsComponent() {
  return (
    <div className="min-h-[300px] w-full sm:w-[250px] bg-white dark:bg-slate-700 border-2 rounded-md shadow-md p-2">
      <img src="starlight.png" alt="" className="w-full" />
      <p className="px-2 mt-2 line-clamp-4 leading-5 text-sm">
        Lorem ipsum dolor sit amet elit. Consectetur blanditiis expedita
        repellat excepturi totam nemo, dolores tempora voluptatibus consequuntur
        laudantium error perspiciatis a sequi ipsa dolore, delectus dolorum id
        ad.
      </p>
      <div className="w-full mt-5 flex justify-center">
        <Link to="#" className="text-sm text-blue-600 hover:underline">
          View Live Page
        </Link>
      </div>
    </div>
  );
}
