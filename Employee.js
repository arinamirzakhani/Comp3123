// Employee.js
const employees = [
  { id: 1, firstName: "Pritesh", lastName: "Patel",  email: "pritesh@gmail.com", Salary: 5000 },
  { id: 2, firstName: "Krish",   lastName: "Lee",    email: "krish@gmail.com",   Salary: 4000 },
  { id: 3, firstName: "Racks",   lastName: "Jacson", email: "racks@gmail.com",   Salary: 5500 },
  { id: 4, firstName: "Denial",  lastName: "Roast",  email: "denial@gmail.com",  Salary: 9000 },
];

const getSalary = (e) => Number(e.Salary ?? e.salary ?? 0);

function getAllEmployees() {
  return employees;
}
function getEmployeeNamesAsc() {
  return employees
    .map(e => `${e.firstName} ${e.lastName}`)
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
}
function getTotalSalary() {
  return employees.reduce((sum, e) => sum + getSalary(e), 0);
}

module.exports = { getAllEmployees, getEmployeeNamesAsc, getTotalSalary };
