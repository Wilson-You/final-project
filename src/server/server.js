const express = require('express');

const app = express();

const bodyPaser = require('body-parser');

const cors = require('cors');

app.use(bodyPaser.urlencoded({ extended: false }));

app.use(bodyPaser.json());

app.use(cors());

app.use(express.static('website'));

const port = 7776;

const server = app.listen(port, feedBack);

function feedBack() {
    console.log("The server is running on port", port);
}

let projectData = {};


app.get('/getWeatherData', returnWeatherData);

function returnWeatherData(req, res) {
    res.send(projectData);
}

// const receivedData = [];
app.post('/postWeatherData', addWeatherData);

function addWeatherData(req, res) {
    projectData = req.body;
    res.send(projectData);
    console.log(projectData);
}

// app.get('/receivedData', returnStoredData);

// function returnStoredData(req, res) {
//     res.send(receivedData);
// }