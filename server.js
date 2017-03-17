const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8100;
const rp = require('request-promise');

const cloudPath = require('./cloudinary.js');

app.use('/upload', cloudPath);

app.listen(PORT, function() {
  console.log('HEY LISTEN', PORT);
  app.emit("appStarted");
});

module.exports = app;
