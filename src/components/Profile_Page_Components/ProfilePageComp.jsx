import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserBlog from "./UserBlog";
import { Button } from "../ui/button";

const ProfilePageComp = () => {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-16">
      <div className="bg-white px-5 py-4 rounded-md shadow-md">
        <div className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <DialogTitle>
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </DialogTitle>
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none">
              <DialogDescription>
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </DialogDescription>
            </DialogContent>
          </Dialog>
          <Link to={"/auth/profile/edit/id"}>
            <FaPencilAlt
              className="text-gray-500 hover:text-green-500"
              size={20}
            />
          </Link>
        </div>
        <div className="w-full my-3 flex flex-col justify-center gap-2">
          <h1 className="text-gray-400 font-bold text-center sm:text-left">
            Full Name : Siddique Ahmed
          </h1>
          <h1 className="text-gray-400 font-bold text-center sm:text-left">Username : Siddique0900</h1>
          <h1 className="text-gray-500 font-bold text-center sm:text-left">Email : Siddiq@gmail.com</h1>
          <h1 className="text-blue-400 font-bold text-center sm:text-left">
            Post : <span className="text-gray-400 font-bold">4</span>
          </h1>
          <div className="flex items-center justify-center sm:justify-end">
            <Button className="bg-red-600 hover:bg-red-500">Logout</Button>
          </div>
        </div>
      </div>
      <UserBlog/>
    </div>
  );
};

export default ProfilePageComp;
