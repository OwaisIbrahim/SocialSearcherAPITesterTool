var http = require('http')
var querystring = require('querystring')
const express = require('express')
var request = require('request')

const router = express.Router()

router.post('/', function(req, res) {
  request(
    {
      uri: 'http://localhost:4000/search/',
      method: 'POST',
      form: {
        smpList: [
          {
            name: 'youtube',
            params: {
              part: 'id, snippet',
              query: req.body.query
            }
          },

          {
            name: 'twitter',
            params: {
              q: req.body.query
            }
          },

          {
            name: 'googleplus',
            params: {
              part: 'id, snippet',
              query: req.body.query
            }
          },

          {
            name: 'flickr',
            params: {
              text: req.body.query
            }
          },

          {
            name: 'tumblr',
            params: {
              query: req.body.query
            }
          },

          {
            name: 'vimeo',
            params: {
              query: req.body.query
            }
          },

          {
            name: 'dailymotion',
            params: {
              query: req.body.query
            }
          }
        ]
      }
    },
    function(error, response, body) {
      var str = JSON.stringify(body, 0, 2)
      res.render('code_mockup', {data: str})
    }
  )
})

module.exports = router
