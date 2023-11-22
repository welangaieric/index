const mysql = require('mysql2/promise');  

const db_con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    port:3306,
    database: "radius"
 }); 

 module.exports = db_con;