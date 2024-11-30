const Employee = require("../models/employee");

// ALL CRUD OPERATIONS BELOW THIS COMMENT
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};