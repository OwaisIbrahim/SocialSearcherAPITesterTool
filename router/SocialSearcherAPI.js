var http = require('http')
var querystring = require('querystring')
const express = require('express')
var request = require('request')

const router = express.Router()

router.post('/', function(req, res) {
  request(
    {
      uri: 'http://localhost:4000/socialsearch/',
      method: 'POST',
      form: {
        smpList: req.body.editList,
        params: {
          query: req.body.query,
          maxResults: req.body.maxResults
        }
      }
    },
    function(error, response, body) {
      var str = JSON.stringify(body, 0, 2)
      res.render('code_mockup', {data: str})
    }
  )
})

module.exports = router
