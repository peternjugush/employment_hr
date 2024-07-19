import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
   
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">HR Manager</h1>
        </div>
      </header>
    
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            HR Manager is dedicated to simplifying HR operations for businesses of all sizes. Our platform is designed to empower HR professionals and managers to focus on strategic initiatives and employee well-being.
          </p>
        </div>
      </div>
  );
};

export default About;
