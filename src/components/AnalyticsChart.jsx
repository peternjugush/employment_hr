// src/pages/Analytics.jsx
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const payrollData = {
  // Placeholder for payroll data, update with actual data
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Payroll Expenses',
      data: [5000, 6000, 5500, 7000],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const attendanceData = {
  // Placeholder for attendance data, update with actual data
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Attendance',
      data: [95, 90, 85, 92, 88],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
  ],
};

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 px-20">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Payroll Data</h2>
          <Bar data={payrollData} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Attendance Data</h2>
          <Line data={attendanceData} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
