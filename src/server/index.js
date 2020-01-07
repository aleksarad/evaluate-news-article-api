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


app.use(bodyParser.urlencoded({ extended: true }))
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
    // textapi.summarize({
    //     'url': 'https://www.dailymail.co.uk/tvshowbiz/article-7510063/Kim-Kardashian-criticized-leading-Armenian-American-advocacy-group-making-SKIMS-Turkey.html',
    //     'sentences_number': 3,
    //   }, function(error, response) {
    //     if (error === null) {
    //         console.log(response);
    //     }
    //   });
    //   console.log(res);
    console.log(req);
    const newURL = 'https://www.dailymail.co.uk/tvshowbiz/article-7510063/Kim-Kardashian-criticized-leading-Armenian-American-advocacy-group-making-SKIMS-Turkey.html';


})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    console.log(`Your API key is ${process.env.API_KEY}`);

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
