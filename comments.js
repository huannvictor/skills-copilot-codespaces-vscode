// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));