const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');
const {rejectUnauthenticated} = require('../modules/authentication-middleware')
require('dotenv').config();

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, function(req, res, next) {
    console.log(req.user)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    const mailOptions = {
      from: `${req.user.email}`,
      to: `${req.body.to}`,
      subject: `${req.body.subject}`,
      text: `${req.body.body}`,
      replyTo: `${req.user.email}`
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