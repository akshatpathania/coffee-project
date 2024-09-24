import React, { useState } from 'react';
import './Login.css'; // Import the CSS for styling

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState('user'); // Default form is 'user'

  // Function to handle form switching
  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="login-container">
      <div className="login-options">
        <button onClick={() => handleFormSwitch('user')}>Login as User</button>
        <button onClick={() => handleFormSwitch('dashboard')}>Dashboard</button>
        <button onClick={() => handleFormSwitch('admin')}>Admin</button>
      </div>
      
      <div className={`login-form ${activeForm === 'user' ? 'show' : 'hide'}`}>
        <h2>User Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      
      <div className={`login-form ${activeForm === 'dashboard' ? 'show' : 'hide'}`}>
        <h2>Dashboard Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className={`login-form ${activeForm === 'admin' ? 'show' : 'hide'}`}>
        <h2>Admin Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
