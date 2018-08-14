const express = require('express')
const fs = require('fs')

const suggestions = require('./router/suggestions')
const bodyParser = require('body-parser')
const ssInterface = require('./router/requestsSocialSearcher')
const ssAPI = require('./router/SocialSearcherAPI')
const searchInterface = require('./router/requestsSearch')
const searchAPI = require('./router/SearchAPI')

var app = express()

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/submit_suggestions', suggestions)

app.use('/', ssInterface)
app.use('/socialsearcherAPI', ssAPI)

app.use('/search', searchInterface)
app.use('/searchAPI', searchAPI)

app.listen(3000)
console.log('listening at 3000')
