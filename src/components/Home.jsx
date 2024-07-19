import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-600">HR Management</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to HR Manager</h2>
        <p className="text-lg text-gray-600 mb-8">
          Your all-in-one solution for managing human resources efficiently and effectively.
        </p>
      </main>

      <section id="features" className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/employeemanagement" className="p-6 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Employee Management</h3>
              <p className="text-gray-700">
                Easily manage employee data, profiles, and information.
              </p>
            </Link>
            <Link to="/payrollmanagement" className="p-6 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Payroll Management</h3>
              <p className="text-gray-700">
                Handle payroll calculations, tax filings, and payment processing.
              </p>
            </Link>
            <Link to="/attendancetracking" className="p-6 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Attendance Tracking</h3>
              <p className="text-gray-700">
                Track attendance records, hours worked, and absences.
              </p>
            </Link>
            
            <Link to="/performanceevaluation" className="p-6 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Performance Evaluation</h3>
              <p className="text-gray-700">
                Conduct performance reviews, feedback collection, and goal setting.
              </p>
            </Link>
          
            <Link to="/recruitmentonboarding" className="p-6 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Recruitment  Onboarding</h3>
              <p className="text-gray-700">
                Streamline hiring processes, applicant tracking, and new employee onboarding.
              </p>
            </Link>
            <Link to="/leaveform" className="p-6 bg-gray-100 rounded-md shadow-md hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">leave management</h3>
              <p className="text-gray-700"> manage how to you take your leave right here!!!!
              </p>
            </Link>
          </div>
        </div>
      </section>

      

         

      <section id="contact" className="bg-gray-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions or need support? Reach out to our team at support@hrmanager.com.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
