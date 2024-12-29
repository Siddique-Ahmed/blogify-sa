import AboutHeroSection from "@/components/About_PAge_Components/AboutHeroSection";
import AboutMissionSection from "@/components/About_PAge_Components/AboutMissionSection";
import WhoChooseUs from "@/components/About_PAge_Components/WhoChooseUs";
import Footer from "@/components/Home_Page_Components/Footer";
import Header from "@/components/Home_Page_Components/Header";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <AboutHeroSection />
      <AboutMissionSection />
      <WhoChooseUs/>
      <Footer />
    </div>
  );
};

export default About;
