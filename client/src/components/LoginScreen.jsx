import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (email === 'test@example.com' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials. Use test@example.com / password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <div className="card-header bg-dark text-white text-center rounded-top">
              <h2 className="mb-0">Login to E-Test System</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
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
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
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
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Login</button>
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
