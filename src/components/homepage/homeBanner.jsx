"use client";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="bg-blue-400 text-white py-6 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome to Task Manager
          </h1>
          <p className="text-lg md:text-xl">
            Organize and manage your tasks efficiently.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-white text-blue-600 hover:bg-blue-100 py-3 px-6 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
