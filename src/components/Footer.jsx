// src/components/Footer.jsx
import React, { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    setSubmitted(true);
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">MyAnalyticsApp</h2>
            <p className="text-gray-400 mt-2">© 2024 MyAnalyticsApp. All rights reserved.</p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/analytics" className="hover:underline">Analytics</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM9.2 8.8c.2-.4.5-.7.9-.7.5 0 .9.4.9.9s-.4.9-.9.9c-.4 0-.7-.3-.9-.7-.1-.3-.2-.6-.2-.9s.1-.6.2-.9zm2.8 1.2h-1.6v6.4h1.6v-6.4zm2.6 0h-1.6v6.4h1.6v-6.4zm1.1-1.6c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1.4z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.6c-.9.4-1.9.7-2.9.8 1.1-.7 1.8-1.8 2.1-3.1-1 .6-2.1 1-3.2 1.3-1-1.1-2.4-1.8-4-1.8-3.1 0-5.5 3.1-4.8 6.1-4-.2-7.6-2.1-10-4.9-1 1.7-.5 3.8 1 4.9-1.1-.1-2.1-.3-3-1v.1c0 2.8 2 5.1 4.6 5.7-1 .3-2.1.3-3.1.1.9 2.7 3.6 4.7 6.8 4.7 8.1 0 12.5-6.6 12.5-12.4v-.6c.9-.6 1.7-1.3 2.4-2.1z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0zM12 15.7v-2.3h-1.5v2.3H9V9.5h1.5V11c.4-.6 1.1-.9 1.8-.9 1.3 0 2.4 1 2.4 2.3v2.3h-1.5v-2.3c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.3H12zm5.7 0h-2.3v-2.3h-2.3v2.3H8v-7.2h2.3v2.3h2.3v-2.3H15v7.2zm-6.5-2.3v2.3H8v-2.3h1.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Company Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Info</h3>
            <p className="text-gray-400 mb-2">Email: <a href="mailto:info@myanalyticsapp.com" className="hover:underline">info@myanalyticsapp.com</a></p>
            <p className="text-gray-400 mb-2">Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
            <p className="text-gray-400 mb-2">Address: 123 Analytics St, Suite 456, Data City, DA 78910</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
