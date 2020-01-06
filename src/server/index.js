var path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mockAPIResponse = require('./mockAPI.js');
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });




const app = express()

app.use(express.static('dist'))


console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    console.log(`Your API key is ${process.env.API_KEY}`);

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
