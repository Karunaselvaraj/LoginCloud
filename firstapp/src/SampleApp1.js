import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Demo from './Demo'; 
import Login from './Login'; 
import Demo from './UsefrmDemo';

function Appp() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Demo/>}/>
        <Route path="/signup" element={<Demo/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Appp;
