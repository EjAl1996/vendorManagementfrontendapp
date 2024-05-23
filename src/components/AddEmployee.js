import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Admin': 'Admin'
        },
        body: JSON.stringify(employee),
      });
      if (!response.ok) {
        throw new Error('Error adding employee');
      }
      // Show success toast notification
      toast.success('Employee added successfully');

      // Reset form fields after successful submission
      setEmployee({
        name: '',
        designation: '',
        ctc: '',
        email: ''
      });
    } catch (error) {
      // Show error toast notification
      toast.error('Error adding employee: ' + error.message);
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} />
        </div>
        <div>
          <label>Designation: </label>
          <input type="text" name="designation" value={employee.designation} onChange={handleChange} />
        </div>
        <div>
          <label>CTC: </label>
          <input type="text" name="ctc" value={employee.ctc} onChange={handleChange} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEmployee;
