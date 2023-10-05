require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users.js');
const emailRoutes = require('./routes/email_cb.js');

const middlewareLogRequest = require('./middleware/logs.js')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/user_review', usersRoutes);

app.use('/email_cb', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});