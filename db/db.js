const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "0000",
  database: "megalodon",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
