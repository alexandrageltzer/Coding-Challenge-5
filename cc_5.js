u2863-9518

// task 1. employee class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Name: ${this.name}, Monthly Salary: $${this.salary}`);
  }
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}
