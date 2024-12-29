import BlogContent from "@/components/Blog_Page_Components/BlogContent";
import Footer from "@/components/Home_Page_Components/Footer";
import Header from "@/components/Home_Page_Components/Header";
import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <BlogContent />
      <Footer />
    </div>
  );
};

export default Blogs;
