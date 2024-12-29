import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-[50%] py-20 pt-28 sm:pt-32 px-7 sm:px-16">
      <div className="flex items-center flex-col gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl max-w-[550px] text-center text-gray-800">Discover Ideas, Share Knowledge, Inspire the World</h1>
        <p className="font-serif max-w-[590px] text-center text-md sm:text-xl text-gray-500">
          Join a vibrant community of thinkers, writers, and readers. Explore
          insightful articles, share your stories, and make an impact through
          your words.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default HeroSection;
