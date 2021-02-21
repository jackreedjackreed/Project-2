//Set up MySQL connection.
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{

require("dotenv").config();
// console.log(process.env.SECRETPASSWORD)

// Dependencies
//Require this module!
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('codeWorms_db', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  //Configuration for the machine of thread pools
  pool: {
    max: 5,
    min: 0,
    idle: 10000, //stop after 10 seconds if you have issues within database.
  },
});
};

// Exports the connection for other files to use
module.exports = sequelize;