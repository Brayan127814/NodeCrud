const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Brayan#16",
  database: "mi_crud_db",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Conexión establecida");
});

module.exports = connection;
