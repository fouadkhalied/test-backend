const express = require('express');
const app = express();
const router = require('../api');
const serverless = require('serverless-http');

app.use('/.netlify/functions/server' , router);
app.use(express.json());

module.exports.handler = serverless(app)

