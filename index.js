// const sequelize = require('./config/database');
// const app = express();
// const port = process.env.dbPort || 3000;
// const email_cb = require('./routes/email_cb');
// const user_review = require('./routes/user_review');
// const db = require('./config/database')

const express = require("express") // ini perlu
const cors = require('cors');
const path = require('path'); //tidak perlu npm install
const db = require('./config/database')
// init express server and router
const app = express();
const email_cb = require('./routes/email_cb');
const user_review = require('./routes/user_review');

app.use(cors());
app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

app.use('/api/email_cb', email_cb);
app.use('/api/user_review', user_review);

const port = 3000;

app.listen(port, function () {
  db.authenticate()
      .then(function () {
          console.log("Database terhubung")
      })
      .catch(function (err) {
          console.log("Database gagal terhubung karena:", err)
      })
  console.log("server start on", port)
})