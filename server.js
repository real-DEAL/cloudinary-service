/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
const express = require('express');
const bodyParser = require('body-parser');
const cloudPath = require('./cloudinary.js');

const app = express();
// const path = require('path');
// const rp = require('request-promise')

const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/upload', (req, res, next) => {
  console.log(req);
  next();
}, cloudPath);
app.get('/test', (req, res) => {
  res.send('cloudinary server setup');
});

app.listen(PORT, () => {
  console.warn('HEY LISTEN', PORT);
  app.emit('appStarted');
});

module.exports = app;
