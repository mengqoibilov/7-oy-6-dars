import React, { useState } from 'react';
import "./style.css";
import { Outlet, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate =useNavigate();


  return (
    <>
      <div className='wrapper'>
        <div className='logo'>
          <h1>Logo</h1>
          <button>+New</button>
        </div>
        <input type="text" placeholder='search group and join' />
        <div>
          <button>@</button>
          <button>&</button>
          <button onClick={()=>{ localStorage.removeItem("token")
          navigate("/login")
          }}>⚙</button>
          
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;




