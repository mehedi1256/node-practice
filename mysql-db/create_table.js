const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected');
    var sql = 'CREATE TABLE customers (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), address VARCHAR(200), email VARCHAR(100), phone VARCHAR(11))';
    con.query(sql, function(error, result, fields) {
        if(error) throw error;
        console.log('Table is created');
    });
});