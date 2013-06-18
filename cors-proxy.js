#!/usr/bin/env node

var request = require('request'),
    cors = require('cors'),
    express = require('express');

var app = express();

app.get('/', cors(), function(req, res){
    request({ uri: req.query.url, }, function(err, resp, body) { res.send(body); });
});

app.listen(3001);
