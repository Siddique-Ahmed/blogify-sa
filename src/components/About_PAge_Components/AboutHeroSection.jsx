import React from "react";
import { Button } from "../ui/button";

const AboutHeroSection = () => {
  return (
    <div className="min-h-[50%] py-10 pt-20 sm:pt-24 px-7 sm:px-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex items-center flex-col gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl max-w-[550px] text-center">
          ABOUT US
        </h1>
        <p className="font-serif max-w-[590px] text-center text-md sm:text-xl">
          At Blogify, we believe in the power of words and stories to inspire,
          inform, and connect people. Our platform is designed to simplify
          blogging, making it easier than ever for creators to share their ideas
          and for readers to discover content that resonates with them.
        </p>
        <p className="font-serif max-w-[590px] text-center text-md sm:text-xl">
          With Blogify, you’re not just writing a blog—you’re building a
          community and creating lasting impact.
        </p>
        <h2 className="font-bold text-xl sm:text-2xl max-w-[550px] text-center">
          Join us on this journey to transform the way we share and experience
          stories.
        </h2>
        <Button variant="outline" className="text-black">Learn More</Button>
      </div>
    </div>
  );
};

export default AboutHeroSection;
