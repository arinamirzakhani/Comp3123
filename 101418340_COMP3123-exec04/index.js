// index.js — COMP3123 exec04 (listens on PORT 4000)
const express = require("express");
const app = express();

// Parse JSON bodies
app.use(express.json());

// (optional) tiny request logger to help debugging
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve static files from /public  (instruction.html -> http://localhost:4000/instruction.html)
app.use(express.static("public"));

/**
 * ROUTES
 */

// GET /hello -> plain text
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=  (defaults: Pritesh Patel)
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects array of { firstname, lastname } in body)
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Not Found" });
});

// Start server on PORT 4000 (avoid port 3000 conflicts)
const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
server.on("error", (err) => {
  console.error("Listen error:", err.code || err.message);
});

