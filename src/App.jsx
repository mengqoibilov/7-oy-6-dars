import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './page/Profile/profile';
import Login from './page/Login/login';
import Register from './page/Register/register';
import Navbar from './components/Navbar/navbar';
import Sidebar from "./components/Sidebar/sidebar"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/main" element={<Navbar />}>
        <Route path='/main' element ={<Sidebar/>}/>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;





