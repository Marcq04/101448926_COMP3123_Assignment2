import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DeleteEmployee() {
    const { employeeId } = useParams();

    const handleDelete = () => {
        axios
            .delete(`http://localhost:5000/api/employees/${employeeId}`)
            .then(() => {
                console.log("Employee deleted");
            })
            .catch((error) => {
                console.error("Error deleting employee", error);
            });
    };

    return <button onClick={handleDelete}>Delete Employee</button>;
}

export default DeleteEmployee;

