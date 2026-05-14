import React, { useState } from 'react';

// Login screen component
const LoginScreen = ({ onLogin }) => {

  // Save email input
  const [email, setEmail] = useState('');

  // Save password input
  const [password, setPassword] = useState('');

  // Handle login process
  const handleLogin = (e) => {

    // Prevent page refresh
    e.preventDefault();

    // Mock authentication logic
    if (email === 'test@example.com' && password === 'password') {

      // Enter the system if credentials are correct
      onLogin();

    } else {

      // Show error message if credentials are incorrect
      alert('Invalid credentials. Use test@example.com / password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          {/* Login card */}
          <div className="card shadow-lg p-4">

            {/* Card header */}
            <div className="card-header bg-dark text-white text-center rounded-top">
              <h2 className="mb-0">Login to E-Test System</h2>
            </div>

            <div className="card-body">

              {/* Login form */}
              <form onSubmit={handleLogin}>

                {/* Email input */}
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter email (e.g., test@example.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password input */}
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Password (e.g., password)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Login button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;