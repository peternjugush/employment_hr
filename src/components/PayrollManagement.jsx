import React from 'react';

const PayrollManagement = () => {

return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Payroll Management</h1>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Payroll management is a critical function that involves managing employee compensation, including salaries, wages, bonuses, deductions, and benefits. It ensures that employees are paid accurately and on time while maintaining compliance with tax laws and labor regulations.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Components</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Employee Information Management</li>
            <li>Compensation and Benefits Administration</li>
            <li>Time and Attendance Tracking</li>
            <li>Deductions and Contributions</li>
            <li>Payroll Processing</li>
            <li>Compliance and Reporting</li>
            <li>Payroll Accounting</li>
            <li>Employee Self-Service</li>
            <li>Integration with Other Systems</li>
            <li>Security and Confidentiality</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Employee Information Management</h2>
          <p className="text-gray-700 mb-4">
            This involves collecting and maintaining accurate records of employees' personal and employment details, such as names, addresses, job titles, departments, and employment statuses.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Compensation and Benefits Administration</h2>
          <p className="text-gray-700 mb-4">
            Managing regular pay, overtime, bonuses, and various employee benefits like health insurance and retirement plans.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Time and Attendance Tracking</h2>
          <p className="text-gray-700 mb-4">
            Tracking employee work hours and managing leave records, including vacations, sick leaves, and other types of paid and unpaid leave.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Deductions and Contributions</h2>
          <p className="text-gray-700 mb-4">
            Calculating and deducting taxes, benefit premiums, and other mandatory and voluntary contributions from employees' pay.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Payroll Processing</h2>
          <p className="text-gray-700 mb-4">
            Establishing payroll schedules, generating pay slips, and facilitating direct deposit of salaries into employees' bank accounts.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Compliance and Reporting</h2>
          <p className="text-gray-700 mb-4">
            Ensuring adherence to tax laws and employment regulations, filing necessary payroll tax forms, and maintaining accurate payroll records.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Payroll Accounting</h2>
          <p className="text-gray-700 mb-4">
            Posting payroll expenses and liabilities to the general ledger, reconciling payroll accounts, and providing data for financial reporting.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Employee Self-Service</h2>
          <p className="text-gray-700 mb-4">
            Offering online portals for employees to view their pay slips, tax forms, and benefits information, and update personal details.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Integration with Other Systems</h2>
          <p className="text-gray-700 mb-4">
            Integrating payroll with HR management systems, accounting software, and time and attendance tracking systems for seamless data flow.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Security and Confidentiality</h2>
          <p className="text-gray-700 mb-4">
            Ensuring the security of payroll data against unauthorized access and breaches, and implementing policies to protect employee information.
          </p>
        </section>
      </main>

      <footer className="bg-white shadow-sm py-4 mt-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};



export default PayrollManagement;
