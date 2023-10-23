const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function(error) {
    if(error) throw error;

    const sql = "UPDATE customers set name = 'Adul Rahim', address = 'Narsingdi', email = 'rahim@gmail.com', phone = '01515601283' WHERE id = 2";
    con.query(sql, function(error, results, fields) {
        if(error) throw error;
        console.log("Record updated successfully");
    });
});