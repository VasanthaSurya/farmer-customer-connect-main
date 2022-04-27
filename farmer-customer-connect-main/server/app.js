const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const froutes = require('./routes/farmer');
const croutes = require('./routes/customer');
const uroutes = require('./routes/users');
const path = require('path');
const logger = require("./logger");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/farmer', froutes);
app.use('/customer', croutes);
app.use('/users', uroutes);
// app.use(app.croutes);
// app.use(app.froutes);
// routes.initialize(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  logger.info("Example app listening at http://localhost:${port}")
  console.log(`Example app listening at http://localhost:${port}`)
})