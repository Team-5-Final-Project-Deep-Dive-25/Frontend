import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email format is invalid";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", { email, password });
      alert("✅ Login successful ");

      // تصفير الحقول بعد النجاح
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login">
      <div className="login-img">
        <img src="/public/loginimage.jpg" alt="loginimg" />
      </div>
      <div className="login-container">
        <p>Log in to Exclusive</p>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="login-actions">
            <button type="submit" className="login-btn">
              Log In
            </button>
            <a href="/forgot-password" className="forgot-link">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
