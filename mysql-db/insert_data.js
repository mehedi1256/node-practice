const mysql = require('mysql2');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db2'
});

con.connect(function (error) {
    if (error) throw error;
    console.log('Connected');
    // const sql = 'INSERT INTO customers (name, address, email, phone) VALUES ?';
    // const sql = 'INSERT INTO products (name) VALUES ?';
    const sql = 'INSERT INTO users (name, favorite_product) VALUES ?';
    var values = [
        /* ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"],
        ["Mehedi", "Dhaka", "mehedi.cse181@gmail.com", "01771885596"] */

        //for product table
        
        // ["Chocolate Heaven"],
        // ["Tasty Lemons"],
        // ["Vanila Dreams"]

        //for user table
        ["John", "1"],
        ["Peter", "1"],
        ["Amy", "2"],
        ["Hanna", "2"],
        ["Michael", "1"]
    ];

    // const sql = 'UPDATE customers set name = "Mehedi Hassan Shovo", address = "Dhaka", email = "mehedi.cse181@gmail.com", phone = "01771885596" WHERE id = 1';
    con.query(sql, [values], function (error, results, fields) {
        if (error) throw error;
        console.log('records inserted');
        console.log(results.insertId);
        // console.log('record updated successfully');
    });
});
