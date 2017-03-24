/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const rp = require('request-promise');
require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8100;


const cloudPath = require('./cloudinary.js');

app.use('/upload', cloudPath);
app.get('/test', (req, res) => {
  res.send('cloudinary server setup');
});

app.listen(PORT, () => {
  console.warn('HEY LISTEN', PORT);
  app.emit('appStarted');
});

module.exports = app;
