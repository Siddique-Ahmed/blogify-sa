import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ContactFormSection = () => {
  return (
    <div className="py-10 px-4 sm:p-16 flex flex-col items-center gap-6">
      <h1 className="text-xl sm:text-3xl font-bold text-center">Contact Us</h1>
      <div className="w-full flex flex-wrap items-stretch gap-6">
        {/* Contact Information Section */}
        <div className="flex-1 min-w-[280px] max-w-[400px] flex flex-col items-center sm:items-start">
          <p className="text-gray-400 text-center sm:text-left mb-4">
            Need to get in touch? No problem! You can use our contact form to send us a message.
          </p>
          <div className="my-2 space-y-2">
            <p className="flex items-center gap-2 text-gray-500">
              <MdOutlineEmail className="text-black" size={20} />
              Itssiddique786@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <BiSolidContact className="text-black" size={20} />
              +923413291171
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <FaRegAddressCard className="text-black" size={20} />
              Orangi Town Karachi Pakistan
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Link to={"https://www.linkedin.com/in/siddique-ahmed-8a3009297/"} target="_blank">
              <FaLinkedin size={24} className="text-gray-500 hover:text-blue-400" />
            </Link>
            <Link to={"https://www.instagram.com/codewithfun764/"} target="_blank">
              <FaInstagram size={24} className="text-gray-500 hover:text-red-400" />
            </Link>
            <Link to={"https://github.com/Siddique-Ahmed"} target="_blank">
              <FaGithub size={24} className="text-gray-500 hover:text-gray-800" />
            </Link>
            <Link to={"https://www.youtube.com/@Codewithfun07"} target="_blank">
              <FaYoutube size={24} className="text-gray-500 hover:text-red-600" />
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 min-w-[280px] flex flex-col">
          <form className="flex flex-col items-center sm:items-stretch gap-4">
            <h2 className="text-lg font-bold text-center sm:text-left">Send Us a Message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <input
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Name"
              />
              <input
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <Button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
