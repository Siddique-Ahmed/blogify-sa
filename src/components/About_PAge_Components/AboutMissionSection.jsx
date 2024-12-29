import React from 'react'
import { FaStar, FaTwitter, FaFacebook, FaInstagram, FaCartPlus, FaTimes } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AboutMissionSection = () => {
  return (
      <section className="text-gray-600 bg-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-60 object-cover object-center rounded"
              src="https://github.com/shadcn.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Our Mission & Vision</h1>
              <p className="leading-relaxed">Blogify was built on the foundation of creativity, connection, and innovation. Our mission is to empower individuals to share their ideas and stories effortlessly while fostering a sense of community.</p>
              <p className="leading-relaxed">Whether you're a budding writer or an avid reader, Blogify is dedicated to providing an enriching and seamless blogging experience that brings people closer together.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutMissionSection
