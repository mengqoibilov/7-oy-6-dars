import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css'; 

function Login() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let username = e.target[0].value;
      let password = e.target[1].value;

      let response = await axios.post('https://nt-shopping-list.onrender.com/api/auth', {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);  
        toast.success('Signed in successfully');
        navigate('/main');
      }
    } catch (err) {
      console.log(err);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  if (localStorage.getItem('token')) {
    return <Navigate to={'/main'} />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <form onSubmit={onSubmit} className="login-form">
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Sign up</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account?</p>
          <NavLink to={'/register'} className="login-link">Create One</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
