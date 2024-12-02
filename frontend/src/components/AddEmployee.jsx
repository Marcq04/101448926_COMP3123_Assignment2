import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [salary, setSalary] = useState(0);
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const employeeData = {
            first_name: name.firstName, 
            last_name: name.lastName,
            email,
            position,
            salary,
            date_of_joining: new Date(dateOfJoining),
            department
        };

        axios
            .post('http://localhost:5000/api/employees/create', employeeData)
            .then((response) => {
                console.log("Employee added", response.data);
                navigate('/employeelist');
            })
            .catch((error) => {
                console.error("Error adding employee: ", error.response ? error.response.data : error.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={name.firstName}
                onChange={(e) => setName((prev) => ({ ...prev, firstName: e.target.value }))}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={name.lastName}
                onChange={(e) => setName((prev) => ({ ...prev, lastName: e.target.value }))}
                placeholder="Last Name"
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position"
            />
            <input
                type="number"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.valueAsNumber)}
                placeholder="Salary"
            />
            <input
                type="date"
                name="dateOfJoining"
                value={dateOfJoining}
                onChange={(e) => setDateOfJoining(e.target.value)}
                placeholder="Date of Joining"
            />
            <input
                type="text"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Department"
            />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default AddEmployee;

