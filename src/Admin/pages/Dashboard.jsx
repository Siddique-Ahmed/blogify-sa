import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-[96vh] w-full flex flex-col items-center justify-center gap-6 p-4 bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600">
          Dashboard Overview
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Card: Users */}
        <div className="bg-white flex flex-col items-center gap-4 px-6 py-8 shadow-md rounded-lg">
          <h1 className="font-bold text-2xl sm:text-3xl text-blue-500">Users</h1>
          <h3 className="font-semibold text-gray-700 text-xl sm:text-2xl">5</h3>
        </div>
        {/* Card: Posts */}
        <div className="bg-white flex flex-col items-center gap-4 px-6 py-8 shadow-md rounded-lg">
          <h1 className="font-bold text-2xl sm:text-3xl text-blue-500">Posts</h1>
          <h3 className="font-semibold text-gray-700 text-xl sm:text-2xl">13</h3>
        </div>
        {/* Card: Pending */}
        <div className="bg-white flex flex-col items-center gap-4 px-6 py-8 shadow-md rounded-lg">
          <h1 className="font-bold text-2xl sm:text-3xl text-blue-500">Pending</h1>
          <h3 className="font-semibold text-gray-700 text-xl sm:text-2xl">23</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
