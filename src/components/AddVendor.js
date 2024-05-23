import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVendor = () => {
  const [vendor, setVendor] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/vendors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Admin': 'Admin'
        },
        body: JSON.stringify(vendor),
      });

      if (!response.ok) {
        throw new Error('Error adding vendor');
      }

      // Show success toast notification
      toast.success('Vendor added successfully');

      // Reset form fields after successful submission
      setVendor({
        name: '',
        email: ''
      });
    } catch (error) {
      // Show error toast notification
      toast.error('Error adding vendor: ' + error.message);
      console.error('Error adding vendor:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor(prevVendor => ({
      ...prevVendor,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>Add Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={vendor.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={vendor.email} onChange={handleChange} />
        </div>
        <button type="submit">Add Vendor</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVendor;
