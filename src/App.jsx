// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import EmployeeManagement from './components/EmployeeManagement';
import PayrollManagement from './components/PayrollManagement';
import PerformanceEvaluation from './components/PerformanceEvaluation';
import About from './components/About';
import RecruitmentOnboarding from './components/RecruitmentOnboarding';
import AttendanceTracking from './components/AttendanceTracking';
import FeaturesForm from './components/FeaturesForm';
import PayrollForm from './components/PayrollForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LeaveForm from './components/LeaveForm';
import DocumentManagement from './components/DocumentManagement';
import AnalyticsChart from './components/AnalyticsChart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/registrater" element={<RegistrationForm />} />
        <Route path="/employeemanagement" element={<EmployeeManagement />} />
        <Route path="/payrollmanagement" element={<PayrollManagement />} />
        <Route path="/performanceevaluation" element={<PerformanceEvaluation />} />    
        <Route path="/about" element={<About />} />    
        <Route path="/recruitmentonboarding" element={< RecruitmentOnboarding />} />    
        <Route path="/attendancetracking" element={< AttendanceTracking/>} />    
        <Route path="/featuresform" element={< FeaturesForm/>} />    
        <Route path="/payrollform" element={< PayrollForm/>} />    
        <Route path="/dashboard" element={< Dashboard/>} />    
        <Route path="/leaveform" element={< LeaveForm/>} />    
        <Route path="/documentmanagement" element={< DocumentManagement/>} />    
        <Route path="/analyticschart" element={< AnalyticsChart/>} />    
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
