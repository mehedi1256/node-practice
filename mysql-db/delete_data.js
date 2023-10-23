const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function (error) {
    if (error) throw error;
    //Delete record
        const sql = "DELETE FROM customers";
        con.query(sql, function (error, results, fields) {
            console.log(results);
        });

    console.log("Record deleted successuflly");
});