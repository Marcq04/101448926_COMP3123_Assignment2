import React, { useState } from 'react';
import axios from 'axios';

function UpdateEmployee({ employeeId }) {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [salary, setSalary] = useState(0);
    const [department, setDepartment] = useState("");


    const handleUpdate = () => {
        axios
            .put(`http://localhost:5000/api/employees/${employeeId}`, {name, salary, department})
            .then((response) => {
                console.log('Employee updated', response.data);
            })
            .catch((error) => {
                console.error('Error updateding employee: ', error)
            });
    };

    return (
        <div>
            <input
                type="text"
                value={name.firstName}
                onChange={(e) => setName((prev) => ({...prev, firstName: e.target.value}))}
                placeholder='New First Name' 
            />
            <input
                type="text"
                value={name.lastName}
                onChange={(e) => setName((prev) => ({...prev, lastName: e.target.value}))}
                placeholder='New Last Name' 
            />
            <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.valueAsNumber)}
                placeholder='New Salary' 
            />
            <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder='New Department' 
            />
            <button onClick={handleUpdate}>Update Employee</button>
        </div>
    );
}

export default UpdateEmployee;

