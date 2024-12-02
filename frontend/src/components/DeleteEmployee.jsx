import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteEmployee() {
    const { employeeId } = useParams();
    const navigate = useNavigate();
    const [employeeName, setEmployeeName] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/employees/${employeeId}`)
            .then((response) => {
                const { first_name, last_name } = response.data;
                setEmployeeName(`${first_name} ${last_name}`);
            })
            .catch((error) => {
                console.error("Error fetching employee data", error);
            });
    }, [employeeId]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:5000/api/employees/${employeeId}`)
            .then(() => {
                console.log("Employee deleted");
                navigate("/employeelist");
            })
            .catch((error) => {
                console.error("Error deleting employee", error);
            });
    };

    return (
        <div>
            <p>Are you sure you want to delete {employeeName}?</p>
            <button onClick={handleDelete}>Delete Employee</button>
        </div>
    );
}

export default DeleteEmployee;

