import React, { useState } from 'react';
import TeacherDashboard from './components/TeacherDashboard';
import StudentPortal from './components/StudentPortal';
import LoginScreen from './components/LoginScreen'; // Import the new component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const [role, setRole] = useState('teacher'); // 'teacher' or 'student'

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const toggleRole = () => {
    setRole(prevRole => prevRole === 'teacher' ? 'student' : 'teacher');
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLoginSuccess} />;
  }

  return (
    <div className="App bg-light min-vh-100">
      <nav className="navbar navbar-dark bg-dark mb-4 px-4 shadow">
        <span className="navbar-brand mb-0 h1">E-Test System</span>
        <div>
          <button 
            className={`btn ${role === 'teacher' ? 'btn-outline-warning' : 'btn-outline-primary'} btn-sm`}
            onClick={toggleRole}
          >
            Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
          </button>
        </div>
      </nav>

      <main className="pb-5">
        <div className="container text-center mb-4">
            <h5 className="text-muted">Currently logged in as: <span className="badge bg-secondary text-uppercase">{role}</span></h5>
        </div>
        
        {role === 'teacher' ? (
          <TeacherDashboard />
        ) : (
          <StudentPortal />
        )}
      </main>

      <footer className="text-center py-4 text-muted border-top bg-white mt-auto">
        <p>&copy; 2024 E-Test System - Mock API Version</p>
      </footer>
    </div>
  );
}

export default App;