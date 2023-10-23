const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect((error) => {
    if (error) throw error;
    const sql = "SELECT users.name AS user, products.name AS favorite FROM users INNER JOIN products  ON users.favorite_product = products.id ";
    con.query(sql, (error, results, fields) => {
        if(error) throw error;
        console.log(results);
    });
})