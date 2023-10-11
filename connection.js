const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost', // e.g., 'localhost' if it's running locally
  user: 'root',
  password: 'sparsh123',
  database: 'slashash',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Perform database operations here

// Close the connection when done
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing the database connection:', err);
//   }
//   console.log('Connection closed');
// });

module.exports = connection
