
import React from 'react';
import './login.css';
const Login = () => {
  return (
    <div className="login">
      <div className="login-img">
        <img src="/public/loginimage.jpg" alt="loginimg"/>
      </div>
        <div className="login-container">
            <p >  Log in to Exclusive</p>
            <p>Enter your details below</p>
            <form>
                <input type="email" required placeholder='Email or Phone Number' />
                <input type="password" required placeholder='Password'/>
                
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