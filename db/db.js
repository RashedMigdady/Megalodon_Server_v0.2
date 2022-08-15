const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6512952",
  password: "Liqt7nedXm",
  database: "sql6512952",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
