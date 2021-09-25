let mysql = require('mysql');
require('dotenv').config();

// Set values for database connection
let connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

// Connect to database
connection.connect();

// Run sql query to use the appropriate database and log failure or success message
connection.query('use ' + process.env.MYSQL_DATABASE, (error, rows) => {
    if (error) {
        console.log('Could not connect to database');
    } else {
        console.log('Connection successful! ', rows);
    }
});

module.exports = connection;