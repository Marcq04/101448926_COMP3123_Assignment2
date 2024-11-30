const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');

router.post('/create', createEmployee);
router.get('/all', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;