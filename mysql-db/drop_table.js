const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function(error, results, fields) {
    if (error) throw error;
    //delete the table
    const sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function(error, results, fields) {
        if (error) throw error;
        console.log("Table deleted successfully");
    });
});