const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * POST route template
 */
router.post('/', function(req, res, next) {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    const mailOptions = {
      from: `jamie.richison19@gmail.com`,
      to: `${req.body.to}`,
      subject: `${req.body.subject}`,
      text: `${req.body.body}`,
      replyTo: `jamie.richison19@gmail.com`
    }
    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res)
      }
    })
  })

module.exports = router;