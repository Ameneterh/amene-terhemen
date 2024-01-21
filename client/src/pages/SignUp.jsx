import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <TextInput type="text" placeholder="username" id="username" />
        <TextInput type="email" placeholder="email" id="email" />
        <TextInput type="password" placeholder="password" id="password" />

        <Button outline gradientDuoTone="purpleToBlue">
          Sign Up
        </Button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/login">
          <span className="text-blue-700 hover:underline">Login</span>
        </Link>
      </div>
    </div>
  );
}
