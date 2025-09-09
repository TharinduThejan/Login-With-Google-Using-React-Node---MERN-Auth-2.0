import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/auth/login/success', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = '/auth/google';
  };

  const handleLogout = () => {
    window.location.href = '/auth/logout';
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Authentication Demo</h1>
        
        {user ? (
          <div className="user-info">
            <h2>Welcome, {user.name}!</h2>
            <div className="profile">
              {user.avatar && (
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="profile-image"
                />
              )}
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Google ID:</strong> {user.googleId}</p>
            </div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="login-section">
            <p>Please sign in with your Google account</p>
            <button onClick={handleGoogleLogin} className="google-login-btn">
              🚀 Login with Google
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;