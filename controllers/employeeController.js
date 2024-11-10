const express = require('express');
const employeeService = require('../services/employeeService');
const Employee = require('../models/employee');

const router = express.Router();

router.post('/createEmployee', (req, res) => {
  const { name, role, salary } = req.body;
  const employee = new Employee(name, role, salary);
  employeeService.create(employee);
  res.status(201).json(employee);
});

router.get('/', (req, res) => {
  res.json(employeeService.getAll());
});

router.get('/highestSalary', (req, res) => {
  res.json(employeeService.getHighestSalaryEmployee());
});

module.exports = router;
