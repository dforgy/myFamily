const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to DB
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'myFamilydb'
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Connected to MySQL");
});

// sample route
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  db.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, name, email });
    }
  );

  // filepath: server.js
db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL");
});

});

app.listen(5000, () => console.log("🚀 Server running on port 5500"));
