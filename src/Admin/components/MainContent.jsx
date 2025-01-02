import React from "react";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="p-4 pt-10 pl-12 flex items-center sm:px-4 sm:py-2 h-screen min-h-screen">
      <Outlet/>
    </div>
  );
};

export default MainContent;
