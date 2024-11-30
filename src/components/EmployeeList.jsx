import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <p>Welcome to the Employee List!</p>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>
            <p>Name: {employee.first_name} {employee.last_name}</p>
            <p>Email: {employee.email}</p>
            <p>Position: {employee.position}</p>
            <p>Salary: {employee.salary}</p>
            <p>Date of Joining: {new Date(employee.date_of_joining).toLocaleDateString()}</p>
            <p>Department: {employee.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
