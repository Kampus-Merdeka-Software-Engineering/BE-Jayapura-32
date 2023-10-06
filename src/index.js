require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const db = require('./config/database.js')

const usersRoutes = require('./routes/users.js');
const emailRoutes = require('./routes/email_cb.js');

const middlewareLogRequest = require('./middleware/logs.js')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/user_review', usersRoutes);

app.use('/email_cb', emailRoutes);

app.listen(PORT, function () {
    db.conn.authenticate()
        .then(function () {
            console.log("Database terhubung")
        })
        .catch(function (err) {
            console.log("Database gagal terhubung karena:", err)
        })
    console.log("server start on", PORT)
})