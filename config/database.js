const { Sequelize } = require('sequelize')
const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const conn = new Sequelize("mysql://avnadmin:AVNS_2vVlGSrZRSGj5xMDH5W@mysql-24bae64d-revou32.aivencloud.com:27319/defaultdb?ssl-mode=REQUIRED", {
    ssl: fs.readFileSync(path.join(__dirname, 'ca.pem')),
    dialect: 'mysql',
    
  });
    
module.exports= conn;