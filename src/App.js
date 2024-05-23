// App.js
import React, { useState } from 'react';
import LoginPage from './components/loginPage';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import AddVendor from './components/AddVendor';
import SendEmail from './components/sendEmail';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUserData(data);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          <Dashboard />
          {/* Include routes or conditionally render other components */}
          {/* <AddEmployee /> */}
          {/* <AddVendor /> */}
          {/* <SendEmail /> */}
        </div>
      )}
    </div>
  );
};

export default App;
