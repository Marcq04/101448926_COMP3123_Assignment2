import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import About from './components/About';

function App() {
  return (
    <Router>
      <nav style={{display: "flex", justifyContent: "space-between"}}>
        <h3><Link to="/">Login</Link></h3>
        <h3><Link to="/signup">Signup</Link></h3>
        <h3><Link to="/employeelist">Employee</Link></h3>
        <h3><Link to="/about">About</Link></h3>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/updateemployee" element={<UpdateEmployee />} />
        <Route path="/deleteemployee" element={<DeleteEmployee />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <p> © 2023 Marcus Quitiquit</p>
      </footer>
    </Router>
  );
}

export default App

