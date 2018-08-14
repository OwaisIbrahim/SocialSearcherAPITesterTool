const express = require('express')

const router = express.Router()

router.get('/', function(req, res) {
  res.render('socialSearcherAuthor.ejs')
})

router.get('/suggestions', function(req, res) {
  res.render('suggestions.ejs')
})

router.get('/aboutus', function(req, res) {
  res.render('aboutus.ejs')
})

module.exports = router
