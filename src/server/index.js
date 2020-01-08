// request info i need from API
//isolate specific info I need
//send that info back to post to page


var path = require('path');
var bodyParser = require('body-parser')
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
var aylien = require("aylien_textapi");
dotenv.config();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/api', function (req, res) {
    textapi.sentiment({
      url: req.body.text, 
      mode: 'document'
    }, function(error, response) {
      console.log(response)
      res.send(response)
      if (error === null) {
        console.log(response);
      }
    })
//add textapi summarization  
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
