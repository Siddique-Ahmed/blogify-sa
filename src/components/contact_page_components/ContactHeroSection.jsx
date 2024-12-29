import React from "react";

const ContactHeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 ">
      <div className="container mx-auto text-center px-6 lg:px-20">
        <h1 className="text-5xl font-extrabold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg mb-6">
          Have questions, feedback, or want to work together? We'd love to hear from you!
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </div>
      <div className="absolute inset-0 w-full h-full bg-opacity-30 bg-black" style={{ zIndex: -1 }}></div>
    </div>
  );
};

export default ContactHeroSection;
