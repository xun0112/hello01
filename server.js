const express = require('express');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// 設定 SQLite 資料庫
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
  db.run(`CREATE TABLE IF NOT EXISTS csv_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT
  )`);
});

// 中間件
app.use(express.static(path.join(__dirname, 'hello-world')));
app.use(express.urlencoded({ extended: true }));
app.use(multer().none());  // 處理表單數據

app.post('/upload', (req, res) => {
  const csvData = req.body.csvContent;  // 假設從前端傳送 CSV 內容
  const lines = csvData.split('\n').slice(1);  // 跳過標頭
  lines.forEach(line => {
    const [name, age, email] = line.split(',');
    if (name && age && email) {
      db.run(`INSERT INTO csv_data (name, age, email) VALUES (?, ?, ?)`, [name.trim(), parseInt(age.trim()), email.trim()], (err) => {
        if (err) {
          console.error(err.message);
        }
      });
    }
  });
  res.send('Data saved to database!');
});

// 新增 GET 端點來擷取資料
app.get('/getdata', (req, res) => {
  db.all(`SELECT * FROM csv_data`, [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
