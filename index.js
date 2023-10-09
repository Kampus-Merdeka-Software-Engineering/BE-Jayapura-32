const express = require('express');
const sequelize = require('./config/database');
const app = express();
const port = 3000;
const email_cb = require('./routes/email_cb');
const user_review = require('./routes/user_review');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully');
  }).catch((error) => {
    console.error('Error syncing database:', error);
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/email_cb', email_cb);
app.use('/api/user_review', user_review);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));