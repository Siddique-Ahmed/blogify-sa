import ContactFormSection from "@/components/contact_page_components/ContactFormSection";
import ContactHeroSection from "@/components/contact_page_components/ContactHeroSection";
import Footer from "@/components/Home_Page_Components/Footer";
import Header from "@/components/Home_Page_Components/Header";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Contact;
