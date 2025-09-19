// index.js
const http = require("http");
const {
  getAllEmployees,
  getEmployeeNamesAsc,
  getTotalSalary,
} = require("./Employee"); // <-- matches Employee.js (capital E)

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8081;

const sendJSON = (res, status, payload) => {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
};
const sendHTML = (res, status, html) => {
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return sendJSON(res, 405, { error: http.STATUS_CODES[405] });
  }

  if (req.url === "/") {
    return sendHTML(res, 200, "<h1>Welcome to Lab Exercise 03</h1>");
  }

  if (req.url === "/employee") {
    return sendJSON(res, 200, getAllEmployees());
  }

  if (req.url === "/employee/names") {
    return sendJSON(res, 200, getEmployeeNamesAsc());
  }

  if (req.url === "/employee/totalsalary") {
    return sendJSON(res, 200, { total_salary: getTotalSalary() });
  }

  return sendJSON(res, 404, { error: http.STATUS_CODES[404] });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
