const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function(error, result, fields) {
    if(error) throw error;
    const sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function(error, results, fields) {
        if(error) throw error;
        console.log(results);
    });
});