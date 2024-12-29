import React from "react";

const blogCategories = [
  "Technology",
  "Health & Wellness",
  "Lifestyle",
  "Travel",
  "Food",
  "Education",
  "Finance",
  "Entertainment",
  "Sports",
  "Parenting",
  "Fashion",
  "Personal Development",
  "Business & Startups",
  "Environment",
  "Art & Design",
  "Science",
  "Gaming",
  "Books & Literature",
  "Culture & History",
  "DIY & Crafts",
];

const WhoChooseUs = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-10 px-3">
      <h1 className="font-bold text-xl sm:text-2xl">Why Choose Us</h1>
      <div className="flex w-full gap-5 items-center justify-evenly flex-wrap">
        <div className="w-full sm:w-1/4 bg-white p-5 shadow-lg rounded-md flex flex-col items-center gap-2">
          <h1 className="text-blue-800 font-bold text-xl sm:text-2xl">1000+</h1>
          <p className="text-gray-500 text-center text-md font-semibold">
            Blog Published
          </p>
        </div>
        <div className="w-full sm:w-1/4 bg-white p-5 shadow-lg rounded-md flex flex-col items-center gap-2">
          <h1 className="text-blue-800 font-bold text-xl sm:text-2xl">500+</h1>
          <p className="text-gray-500 text-center text-lg font-semibold">
            Active User
          </p>
        </div>
        <div className="w-full sm:w-1/4 bg-md bg-white p-5 shadow-lg rounded-md flex flex-col items-center gap-2">
          <h1 className="text-blue-800 font-bold text-xl sm:text-2xl">
            {blogCategories.length}+
          </h1>
          <p className="text-gray-500 text-center text-md font-semibold">
            Categories Covered
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoChooseUs;
