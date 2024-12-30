import Footer from "@/components/Home_Page_Components/Footer";
import Header from "@/components/Home_Page_Components/Header";
import ProfilePageComp from "@/components/Profile_Page_Components/ProfilePageComp";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <ProfilePageComp/>
      <Footer />
    </div>
  );
};

export default ProfilePage;
