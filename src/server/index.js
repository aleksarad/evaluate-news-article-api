//Server Setup and Middleware
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('dist'))

//Setup dote for the API keys
const dotenv = require('dotenv');
dotenv.config();

// console.log(__dirname)

//Mock API and Aylien API vars
const mockAPIResponse = require('./mockAPI.js');
const aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


//ROUTES
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.post('/api', function (req, res) {

    textapi.sentiment({
      url: req.body.text, 
      mode: 'document',
    }, function(error, response) {
      console.log(response)
      res.send(response)
      if (error === null) {
        console.log(response);
      }
    })
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

// Port designation
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

