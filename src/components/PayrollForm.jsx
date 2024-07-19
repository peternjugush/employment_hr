import React, { useState } from 'react';

const PayrollForm = () => {
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_id: '',
    salary: '',
    bonus: '',
    pay_date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/payrolls/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Payroll record created:', data);
        setFormData({
          employee_name: '',
          employee_id: '',
          salary: '',
          bonus: '',
          pay_date: ''
        });
      } else {
        console.error('Failed to create payroll record');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <form 
      action="post"
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add Payroll Record</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Employee Name</label>
          <input
            type="text"
            name="employee_name"
            value={formData.employee_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Employee ID</label>
          <input
            type="text"
            name="employee_id"
            value={formData.employee_id}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bonus</label>
          <input
            type="text"
            name="bonus"
            value={formData.bonus}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
   
     
        <div className="mb-4">
          <label className="block text-gray-700">Pay Date</label>
          <input
            type="date"
            name="pay_date"
            value={formData.pay_date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
        >
          Add Payroll Record
        </button>
      </form>
    </div>
  );
};

export default PayrollForm;
