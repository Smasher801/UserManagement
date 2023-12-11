"use client"
import React from 'react';
import { FiCheckSquare, FiList, FiCalendar } from 'react-icons/fi';

const FeatureSection = () => {
  return (
    <div className="bg-blue-400 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Features of Task Manager
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow-md">
            <FiCheckSquare className="text-blue-300 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Task Organization</h3>
            <p className="text-blue-200">
              Organize your tasks efficiently with various categories and tags.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow-md">
            <FiList className="text-blue-300 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Task Lists</h3>
            <p className="text-blue-200">
              Create multiple task lists to manage different projects or goals.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow-md">
            <FiCalendar className="text-blue-300 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deadline Tracking</h3>
            <p className="text-blue-200">
              Set deadlines and reminders to stay on top of your tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
