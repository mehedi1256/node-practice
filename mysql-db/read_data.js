const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function(error) {
    if(error) throw error;
    console.log('connected');
    const sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape('sDhaka');
    con.query(sql, function(error, results, fields) {
        console.log(results);
        console.log(fields);
    });
});