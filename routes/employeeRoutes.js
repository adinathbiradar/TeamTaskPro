const express = require("express");
const router = express.Router();
const {
  getEmployees,
  createEmployee,
} = require("../controllers/employeeController");

// Get all employees
router.get("/", getEmployees);

// Create new employee
router.post("/", createEmployee);

module.exports = router;
