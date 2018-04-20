const express = require('express');
const morgan = require('morgan');
const https = require('https');
const axios = require('axios');


var app = express();

var path = require('path');
var cors = require('cors');

app.use(cors());

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));


module.exports = app;
