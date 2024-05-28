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
// task 2. manager subclass 
class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = baseSalary * 0.15;
      const totalSalary = baseSalary + bonus;
      console.log(`Bonus: $${bonus}, Total Annual Salary (including bonus): $${totalSalary}`);
      return totalSalary;
    }
  }
