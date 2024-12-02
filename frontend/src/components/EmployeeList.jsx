import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

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

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(employee =>
        employee.department.toLowerCase().includes(search.toLowerCase()) ||
        employee.position.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, employees]);

  return (
    <div>
      <h1>Employee List</h1>
      <p>Welcome to the Employee List!</p>
      <button onClick={logout}>Logout</button>

      <Link to="/addemployee">
        <button>Add Employee</button>
      </Link>

      <input
        type="text"
        placeholder="Search by department or position"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredEmployees.length === 0 ? (
        <p>No employees found. Please add an employee.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Date of Joining</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <tr key={employee._id}>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
                <td>{employee.salary}</td>
                <td>{new Date(employee.date_of_joining).toLocaleDateString()}</td>
                <td>{employee.department}</td>
                <td>
                  <Link to={`/updateemployee/${employee._id}`}>Update</Link>
                  <Link to={`/deleteemployee/${employee._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;

