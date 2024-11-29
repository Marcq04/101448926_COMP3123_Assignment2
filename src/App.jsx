import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Employee from './components/Employee';
import About from './components/About';

function App() {
  return (
    <Router>
      <nav style={{display: "flex", justifyContent: "space-between"}}>
        <h3><Link to="/">Login</Link></h3>
        <h3><Link to="/signup">Signup</Link></h3>
        <h3><Link to="/employee">Employee</Link></h3>
        <h3><Link to="/about">About</Link></h3>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <p> © 2023 Marcus Quitiquit</p>
      </footer>
    </Router>
  );
}

export default App

