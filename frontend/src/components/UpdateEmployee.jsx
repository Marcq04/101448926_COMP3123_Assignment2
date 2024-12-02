import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateEmployee() {
    const { employeeId } = useParams();
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState(0);
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/employees/${employeeId}`)
            .then(response => {
                const { first_name, last_name, email, position, salary, date_of_joining, department } = response.data;
                setName({ firstName: first_name, lastName: last_name });
                setEmail(email);
                setPosition(position);
                setSalary(salary);
                setDateOfJoining(date_of_joining.slice(0, 10));
                setDepartment(department);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, [employeeId]);

    const handleUpdate = () => {
        const updatedEmployee = {
            first_name: name.firstName,
            last_name: name.lastName,
            email,
            position,
            salary,
            date_of_joining: new Date(dateOfJoining),
            department
        };

        axios.put(`http://localhost:5000/api/employees/${employeeId}`, updatedEmployee)
            .then(response => {
                console.log('Employee updated', response.data);
                navigate('/employeelist');
            })
            .catch(error => {
                console.error('Error updating employee:', error);
            });
    };

    return (
        <div>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName(prev => ({ ...prev, firstName: e.target.value }))}
                placeholder="New First Name"
            />
            <input
                type="text"
                value={name.lastName}
                onChange={e => setName(prev => ({ ...prev, lastName: e.target.value }))}
                placeholder="New Last Name"
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="New Email"
            />
            <input
                type="text"
                value={position}
                onChange={e => setPosition(e.target.value)}
                placeholder="New Position"
            />
            <input
                type="number"
                value={salary}
                onChange={e => setSalary(e.target.valueAsNumber)}
                placeholder="New Salary"
            />
            <input
                type="date"
                value={dateOfJoining}
                onChange={e => setDateOfJoining(e.target.value)}
                placeholder="New Date of Joining"
            />
            <input
                type="text"
                value={department}
                onChange={e => setDepartment(e.target.value)}
                placeholder="New Department"
            />
            <button onClick={handleUpdate}>Update Employee</button>
        </div>
    );
}

export default UpdateEmployee;

