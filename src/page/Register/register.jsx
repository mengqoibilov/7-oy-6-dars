import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css'; 

function Register() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let username = e.target[0].value;
      let password = e.target[1].value;
      let name = e.target[2].value;

      let response = await axios.post(
        'https://nt-shopping-list.onrender.com/api/users',
        {
          name,
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        toast.success('Signed up successfully');
        navigate('/main');
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  if (localStorage.getItem('token')) {
    return <Navigate to={'/main'} />;
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        <form onSubmit={onSubmit} className="register-form">
          <input type="text" placeholder="Name" className="register-input" />
          <input type="text" placeholder="Username" className="register-input" />
          <input type="password" placeholder="Password" className="register-input" />
          <button type="submit" className="register-button">Sign Up</button>
        </form>
        <div className="register-footer">
          <p>Already have an account?</p>
          <NavLink to={'/login'} className="register-link">Log In</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
