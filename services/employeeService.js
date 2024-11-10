const InMemoryDbV1 = require('../repositories/inMemoryDb');
const Employee = require('../models/employee');

class EmployeeService extends InMemoryDbV1 {
  getHighestSalaryEmployee() {
    return this.getAll().reduce((prev, curr) => (prev.salary > curr.salary ? prev : curr), {});
  }
}

module.exports = new EmployeeService();
