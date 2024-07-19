// src/HomePage.jsx
import React from 'react';

const RecruitmentOnboarding = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">HR App</div>
          <nav>
            <a href="#" className="text-gray-800 mx-3 hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 mx-3 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-800 mx-3 hover:text-gray-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to the HR App</h1>
            <p className="text-gray-600 mt-4">Manage your human resources efficiently and effectively.</p>
          </div>
        </section>

        <section className="features py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Features</h2>
            <div className="mt-8 flex flex-wrap">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold text-gray-800">Employee Management</h3>
                  <p className="text-gray-600 mt-2">Easily manage employee information, roles, and more.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold text-gray-800">Attendance Tracking</h3>
                  <p className="text-gray-600 mt-2">Keep track of employee attendance and leave records.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold text-gray-800">Performance Reviews</h3>
                  <p className="text-gray-600 mt-2">Conduct and manage performance reviews seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-white">
          &copy; 2024 HR App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default RecruitmentOnboarding;
