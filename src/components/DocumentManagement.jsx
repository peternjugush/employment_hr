import React, { useState, useEffect } from 'react';

const DocumentManagement = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/documents/')
      .then(response => response.json())
      .then(data => setDocuments(data))
      .catch(error => console.error('Error fetching documents:', error));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/documents/', {
        
        body: formData,
      });

      if (response.ok) {
        const newDocument = await response.json();
        setDocuments([...documents, newDocument]);
        setSelectedFile(null);  // Clear the file input
      } else {
        console.error('Failed to upload document:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 px-20">
      <header className="bg-white shadow-sm py-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Document Management</h1>
        </div>
      </header>

      <main className="container mx-auto px-20">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload Document</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                Choose a file
              </label>
              <input
                type="file"
                id="file"
                name='file'
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </form>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Uploaded Documents</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                  <th className="py-3 px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((document) => (
                  <tr key={document.id}>
                    <td className="py-4 px-6 whitespace-nowrap">{document.name}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{new Date(document.uploaded_at).toLocaleDateString()}</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <a href={document.file} download className="text-blue-500 hover:text-blue-700">Download</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentManagement;
