import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SignupForm = () => {
  return (
    <div className="bg-white shadow-md rounded-md pb-5 flex flex-col items-center gap-4 w-full sm:w-[450px]">
      <div className="w-full p-4 flex items-center">
                <Link className="text-gray-400 hover:text-blue-400" to={"/"}>
                <FaArrowLeft size={14}/>
                </Link>
              </div>
      <div className="w-full flex items-center flex-col gap-2">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-600">Blogify</h1>
        <p className="text-md font-medium text-gray-400">Share Ideas, Inspire the World</p>
      </div>
      <h1 className="text-center text-blue-500 font-bold text-xl sm:text-2xl">Signup</h1>
      <form className="w-full flex flex-col items-center gap-3 px-4">
        <div className="w-full flex flex-col gap-2 px-2 sm:px-4">
          <Label className="text-md" htmlFor="email">Username</Label>
          <Input  placeholder="Enter your username" type="text" name="username"/>
          {/* <p className="text-red-500">Field required</p> */}
        </div>
        <div className="w-full flex flex-col gap-2 px-2 sm:px-4">
          <Label className="text-md" htmlFor="email">Email</Label>
          <Input  placeholder="Enter your email" type="email" name="email"/>
          {/* <p className="text-red-500">Field required</p> */}
        </div>
        <div className="w-full flex flex-col gap-2 px-2 sm:px-4">
          <Label className="text-md" htmlFor="email">Passowrd</Label>
          <Input placeholder="Enter your password" type="password" name="password"/>
          {/* <p className="text-red-500">Field required</p> */}
        </div>
        <div className="w-full flex flex-col gap-2 px-2 sm:px-4">
        <Button className="bg-blue-600 hover:bg-blue-500 w-full sm:w-[180px] mt-3">Signup</Button>
        </div>
        <div>
          <p className="text-gray-500">Have an account? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
