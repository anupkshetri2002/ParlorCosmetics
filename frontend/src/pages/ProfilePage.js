import React, { useState } from 'react';

const ProfilePage = () => {
  // State to manage user description
  const [description, setDescription] = useState('');
  const [savedDescription, setSavedDescription] = useState('');

  // Function to handle description input change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to handle saving the description
  const handleSaveDescription = () => {
    setSavedDescription(description);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          rows="4"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          onClick={handleSaveDescription}
        >
          Save Description
        </button>
        <p className="text-gray-500">Saved Description: {savedDescription}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
