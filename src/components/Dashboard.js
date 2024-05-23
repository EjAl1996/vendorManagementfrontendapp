// Dashboard.js
import React from 'react';
import AddEmployee from './AddEmployee';
import AddVendor from './AddVendor';
import SendEmail from './sendEmail';

const Dashboard = () => {
  return (
    <div>
    <h2>Welcome to Dashboard</h2>
    <div className="components-container">
      <div className="add-employee-container">
        <AddEmployee />
      </div>
      <div className="add-vendor-container">
        <AddVendor />
      </div>
      <div className="send-email-container">
        <SendEmail />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
