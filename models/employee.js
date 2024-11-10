const Product = require('./products');

class Employee extends Product {
  constructor(name, role, salary) {
    super(name, '', 0); // Extends Product with a blank description and price
    this.role = role;
    this.salary = salary;
  }
}

module.exports = Employee;
