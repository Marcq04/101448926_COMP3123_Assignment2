import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const { auth, setAuth } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ isAuthenticated: false });
    window.location.href = '/login';
  };

  if (!auth.isAuthenticated) {
    window.location.href = '/signup';
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees/all')
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <p>Welcome to the Employee List!</p>
      <button onClick={logout}>Logout</button>
      
      <Link to="/addemployee">
        <button>Add Employee</button>
      </Link>

      {employees.length === 0 ? (
        <p>No employees found. Please add an employee.</p>
      ) : (
        <ul>
          {employees.map(employee => (
            <li key={employee._id}>
              <p>Name: {employee.first_name} {employee.last_name}</p>
              <p>Email: {employee.email}</p>
              <p>Position: {employee.position}</p>
              <p>Salary: {employee.salary}</p>
              <p>Date of Joining: {new Date(employee.date_of_joining).toLocaleDateString()}</p>
              <p>Department: {employee.department}</p>
              <Link to={`/updateemployee/${employee._id}`}>Update</Link>
              <Link to={`/deleteemployee/${employee._id}`}>Delete</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default EmployeeList;

