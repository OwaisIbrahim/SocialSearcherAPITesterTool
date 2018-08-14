const express = require('express')

const router = express.Router()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Enter your email Adress', // ENTER HERE
    pass: 'Enter your password' // ENTER HERE
  }
})

router.post('/', function(req, res) {
  //replyBack(req);
  //ourMail(req,res);
})

function replyBack(req) {
  var mailOptions = {
    from: 'SocialSearcher <YOUR EMAIL ADDRESS>', // ENTER HERE
    to: req.body.email,
    subject: 'Thanks For Your Feedback',
    text:
      'Dear ' +
      req.body.name +
      ', Thank you for visiting Social Searcher!!\n\nWe highly appreciate your feedback. We will reply back within 24 hours. Happy Searching :)'
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

function ourMail(req) {
  var mailOptions = {
    from: 'SocialSearcher <YOUR EMAIL ADDRESS>',
    to: 'ENTER RESPONSE EMAIL',
    subject: 'Gotcha User Feedback',
    text:
      'Username: ' +
      req.body.name +
      '\nUser email: ' +
      req.body.email +
      '\n\nMessage:\n\n' +
      req.body.feedback
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

module.exports = router
