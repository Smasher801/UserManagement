"use client"
import React from 'react';
// import signup from '../../assets/signup.svg'

const ActionSection = () => {
  return (
    <div className="bg-cover bg-center bg-blue-400" style={{ backgroundImage: 'url("../../assets/signup.svg")' }}>
      <div className="bg-opacity-75 py-24 px-4 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-blue mb-4">
          Take Control of Your Tasks
        </h2>
        <p className="text-lg text-blue mb-8">
          Manage tasks efficiently and stay organized with our task manager.
        </p>
        <button className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ActionSection;
