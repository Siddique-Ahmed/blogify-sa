import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FaBars, FaCaretDown, FaEdit, FaUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Button } from "../ui/button";

const lnk = [
  {
    name: "Home",
    nav: "/",
  },
  {
    name: "Blogs",
    nav: "/blogs",
  },
  {
    name: "About",
    nav: "/about",
  },
  {
    name: "Contact",
    nav: "/contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = true;

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white p-3 px-4 sm:px-14 flex items-center justify-between gap-2">
      <div className="flex  items-center gap-2">
        <Button
          variant="outline"
          className="block sm:hidden text-gray-500 cursor-pointer"
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          {isOpen ? (
            <FaXmark className="block sm:hidden cursor-pointer" size={20} />
          ) : (
            <FaBars className="block sm:hidden cursor-pointer" size={20} />
          )}
        </Button>
        <Link to={"/"}>
          <h1 className="font-bold uppercase sm:mr-4 text-xl sm:text-2xl text-blue-500">
            Blogify
          </h1>
        </Link>
        <ul className="hidden sm:flex items-center gap-2">
          {lnk.map((item, ind) => {

            return (
              <Link key={ind} to={item.nav}>
                <li className="font-semibold text-sm hover:underline hover:text-blue-500 hover:pb-1">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        {auth ? (
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div className="hidden sm:flex items-center">
                  <h1 className="text-sm">Siddique ahmed</h1>
                  <FaCaretDown />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[180px] p-2">
              <div className="w-full">
                <div>
                  <Button
                    variant="outline"
                    className="w-full text-gray-500 hover:text-gray-600 border-none flex justify-start items-center gap-2"
                  >
                    <FaUser /> Profile
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="w-full text-gray-500 hover:text-gray-600 border-none flex justify-start items-center gap-2"
                  >
                    <FaEdit /> Create Blog
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <div className="flex items-center gap-2">
            <Link to={"/login"}>
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </div>
      <div
        className={`bg-white w-full sm:hidden shadow-md fixed ${
          isOpen ? "top-[57px]" : "top-[-520px]"
        } left-0 z-10`}
      >
        <ul className="px-3 py-5 flex flex-col gap-4">
          {lnk.map((item, ind) => {
            return (
              <Link
                onClick={() => setIsOpen(false)}
                className="w-full text-gray-500 font-semibold hover:text-gray-800 hover:bg-gray-100 p-2 rounded-md"
                key={ind}
                to={item.nav}
              >
                <li>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
