const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function(error) {
    if(error) throw error;
    //sort the result by name
    const sql = "SELECT * FROM customers ORDER BY id";
    con.query(sql, function(error, results, fields) {
        console.log(results);
    });
});