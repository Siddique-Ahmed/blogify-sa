import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EditProfileForm = () => {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-16 flex items-center justify-center">
      <form className="bg-white px-5 py-10 rounded-md shadow-md flex flex-col items-center gap-3 w-full sm:w-[450px]">
        <div className="w-full">
          <Link to={"/auth/profile"}>
          <FaArrowLeft size={15} className="text-gray-400 hover:text-blue-500"/>
          </Link>
        </div>
        <h1 className="text-xl font-bold text-blue-600">Edit your Profile</h1>
        <div className="w-full flex flex-col gap-2">
          <Label>Full Name</Label>
          <Input type="text" placeholder="Full Name" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label>Username</Label>
          <Input type="text" placeholder="Username" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label>Profile Pic</Label>
          <Input type="file" />
        </div>
        <Button
          type="submit"
          className="bg-blue-600 mt-2 hover:bg-blue-500 w-full sm:w-[190px]"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditProfileForm;
