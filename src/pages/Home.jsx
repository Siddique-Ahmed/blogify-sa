import BlogComponent from "@/components/Home_Page_Components/BlogComponent";
import CategorySection from "@/components/Home_Page_Components/CategorySection";
import Footer from "@/components/Home_Page_Components/Footer";
import Header from "@/components/Home_Page_Components/Header";
import HeroSection from "@/components/Home_Page_Components/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <BlogComponent />
      <Footer/>
    </div>
  );
};

export default Home;
