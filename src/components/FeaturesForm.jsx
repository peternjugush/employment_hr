import React, { useState } from 'react';

const FeaturesForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/features/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const feature = await response.json();
        console.log('Feature added:', feature);
        setFormData({
          title: '',
          content: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Feature creation failed:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form
    action="post"
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 border border-gray-200 rounded-lg bg-white px-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Feature</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Add Feature
      </button>
    </form>
  );
};

export default FeaturesForm;
