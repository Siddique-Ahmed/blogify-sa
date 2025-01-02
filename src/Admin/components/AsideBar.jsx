import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsPostcardHeart } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const asideItems = [
  {
    name: "Dashboard",
    icon: <MdOutlineSpaceDashboard size={20} />,
    link: "/admin",
  },
  {
    name: "Users",
    icon: <FaRegUserCircle size={20} />,
    link: "/admin/user",
  },
  {
    name: "Post",
    icon: <BsPostcardHeart size={20} />,
    link: "/admin/post",
  },
];

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="sm:hidden fixed sm:static top-4 left-4 z-50 sm:z-0">
        <button
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      <div
        className={`fixed sm:flex inset-0 z-40 sm:z-0 flex ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 sm:opacity-100 sm:pointer-events-auto`}
        aria-hidden={!isOpen}
      >
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 ${
            isOpen ? "block" : "hidden"
          } sm:hidden`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`relative bg-white shadow-lg h-full transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:translate-x-0 sm:relative sm:w-1/5 w-2/3`}
        >
          <div className="px-4 py-6 flex flex-col h-full">
            <h1 className="font-bold text-blue-600 uppercase text-lg sm:text-xl hidden sm:block">
              Blogify
            </h1>
            <h1 className="font-bold uppercase text-gray-400 text-sm sm:text-md hidden sm:block">
              Admin
            </h1>
            <ul className="flex flex-col gap-4 mt-6 overflow-y-auto">
              {asideItems.map((item, ind) => (
                <li
                  key={ind}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
                    location.pathname === item.link
                      ? "bg-gray-200 text-gray-700"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <Link
                    className={`text-md font-semibold truncate ${
                      isOpen ? "block" : "hidden"
                    } sm:block w-full`}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button variant="destructive" className="w-full">Logout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBar;
