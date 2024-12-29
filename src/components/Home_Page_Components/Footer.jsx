import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm">
            Welcome to our blog platform, where ideas and creativity come alive.
            Share your stories, learn from others, and be part of a vibrant
            community.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">Email:</span> Itssiddique786@gmail.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +923413291171
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <Link
              to="https://github.com/Siddique-Ahmed"
              className="text-gray-400 hover:text-white text-xl"
              aria-label="Github"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.youtube.com/@Codewithfun07"
              className="text-gray-400 hover:text-white text-xl"
              aria-label="Youtube"
              target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link
              to="https://www.instagram.com/codewithfun764/"
              className="text-gray-400 hover:text-white text-xl"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/in/siddique-ahmed-8a3009297/"
              className="text-gray-400 hover:text-white text-xl"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
