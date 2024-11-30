import React, { useState } from "react";
import axios from "axios";

function AddEmployee() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [salary, setSalary] = useState(0);
    const [department, setDepartment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/employees', { name, salary, department })
            .then((response) => {console.log("Employee added", response.data);})
            .catch((error) => {
                console.error("Error adding employee: ", error)
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstName" || name === "lastName") {
            setName((prev) => ({ ...prev, [name]: value }));
        } else if (name === "salary") {
            setSalary(valueAsNumber);
        } else if (name === "department") {
            setDepartment(value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={name.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={name.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="number"
                name="salary"
                value={salary}
                onChange={handleChange}
                placeholder="Salary"
            />
            <input
                type="text"
                name="department"
                value={department}
                onChange={handleChange}
                placeholder="Department"
            />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default AddEmployee;

