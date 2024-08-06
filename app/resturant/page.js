// pages/login.js
"use client";

import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <header className="header">
        <button className="themeToggle" onClick={toggleTheme}>
          {isDarkMode ? "🌞" : "🌜"}
        </button>
      </header>
      <main className="main">
        <h1>Log in</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
            />
            {/* <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button> */}
          </div>
          <div className="checkboxGroup">
            <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
            <label htmlFor="keepLoggedIn">Keep me logged in</label>
          </div>
          <button type="submit" className="loginButton">
            Log in
          </button>
        </form>
        <div className="links">
          <a href="#" className="link">
            Forgot username?
          </a>
        </div>
      </main>
      <footer className="footer">
        <p>©2024 Your Company. All rights reserved.</p>
      </footer>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          padding: 20px;
          background-color: white;
          color: black;
        }
        .container.dark {
          background-color: black;
          color: white;
        }
        .header {
          display: flex;
          justify-content: flex-end;
        }
        .themeToggle {
          padding: 5px;
          margin-right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5em;
        }
        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .form {
          display: flex;
          flex-direction: column;
          width: 300px;
        }
        .inputGroup {
          margin-bottom: 15px;
        }
        .inputGroup label {
          display: block;
          margin-bottom: 5px;
        }
        .inputGroup input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }
        .inputGroup button {
          margin-top: 5px;
        }
        .checkboxGroup {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .checkboxGroup input {
          margin-right: 5px;
        }
        .loginButton {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
        .loginButton:hover {
          background-color: #005bb5;
        }
        .links {
          margin-top: 15px;
        }
        .link {
          color: #0070f3;
          text-decoration: none;
        }
        .link:hover {
          text-decoration: underline;
        }
        .footer {
          text-align: center;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
