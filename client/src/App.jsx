import React, { useState } from 'react';

// Import main components
import TeacherDashboard from './components/TeacherDashboard';
import StudentPortal from './components/StudentPortal';
import LoginScreen from './components/LoginScreen';

import './App.css';

function App() {

  // Save login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Save current user role
  const [role, setRole] = useState('teacher'); // 'teacher' or 'student'

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Switch between Teacher and Student views
  const toggleRole = () => {
    setRole(prevRole => prevRole === 'teacher' ? 'student' : 'teacher');
  };

  // Show login screen before entering the system
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLoginSuccess} />;
  }

  return (
    <div className="App bg-light min-vh-100">

      {/* Top navigation bar */}
      <nav className="navbar navbar-dark bg-dark mb-4 px-4 shadow">

        <span className="navbar-brand mb-0 h1">
          E-Test System
        </span>

        <div>

          {/* Button to switch between Teacher and Student */}
          <button 
            className={`btn ${role === 'teacher' ? 'btn-outline-warning' : 'btn-outline-primary'} btn-sm`}
            onClick={toggleRole}
          >
            Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
          </button>

        </div>
      </nav>

      <main className="pb-5">

        {/* Display current logged in role */}
        <div className="container text-center mb-4">
            <h5 className="text-muted">
              Currently logged in as:
              <span className="badge bg-secondary text-uppercase">
                {role}
              </span>
            </h5>
        </div>
        
        {/* Render component according to selected role */}
        {role === 'teacher' ? (
          <TeacherDashboard />
        ) : (
          <StudentPortal />
        )}

      </main>

      {/* Footer section */}
      <footer className="text-center py-4 text-muted border-top bg-white mt-auto">
        <p>&copy; 2024 E-Test System - Mock API Version</p>
      </footer>

    </div>
  );
}

export default App;