// LocalStorage.js
import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  const [name, setName] = useState('');

  // Load stored data from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // Handle name change and store in localStorage
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem('name', newName); // Save the new name to localStorage
  };

  // Clear the stored name from localStorage
  const handleClear = () => {
    setName('');
    localStorage.removeItem('name'); // Remove the item from localStorage
  };

  return (
    <div>
      <h1>Hello, {name || 'Guest'}!</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default LocalStorage;
