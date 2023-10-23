var mysql = require('mysql2');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected!');
    con.query('create database node_db2', function(err, result){
        if(err) throw err;
        console.log('Database is created');
    })
});