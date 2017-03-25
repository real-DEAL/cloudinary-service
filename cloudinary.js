/*  eslint no-console: ["error", { allow: ["warn", "error"] }] */
const express = require('express');
const cloudinary = require('cloudinary');
require('dotenv').config();

const router = new express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

router.post('/image', (req, res) => {
  console.warn('sendimage', req.body);

  cloudinary.uploader.upload(req.body.image, (result) => {
    console.warn(result);
    res.send(result.url);
  });
  // const options = {
  //   method: 'POST',
  //   uri: ``,
  //   body: {
  //       requests: req.body,
  //   },
  //   json: true // Automatically stringifies the body to JSON
  // };
  // rp(options)
  //   .then(function (parsedBody) {
  //     // POST succeeded...
  //     // response comes back in the form of responses[0].****Annotations, which is
  //     // an array of objects with description and score
  //     res.send(parsedBody.responses);
  //   })
  //   .catch(function (err) {
  //     // POST failed...
  //     throw new Error(err);
  //   });
});

module.exports = router;
