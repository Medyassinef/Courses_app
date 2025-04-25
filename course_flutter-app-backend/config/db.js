const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'course_user',      // New user
  password: 'azerty123', 
  database: 'courses_db',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;