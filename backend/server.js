const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const rateLimit = require("express-rate-limit");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: fs.readFileSync("/run/secrets/db_user", "utf8").trim(),
  password: fs.readFileSync("/run/secrets/db_password", "utf8").trim(),
  database: "myapp",
  max: 10,                  // maximum connections
  idleTimeoutMillis: 30000, // close idle connections after 30s
  connectionTimeoutMillis: 2000, // fail fast if can't connect
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100                   // max 100 requests per IP
});

app.use(limiter);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
