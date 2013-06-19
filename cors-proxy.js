#!/usr/bin/env node

var request = require('request'),
    cors = require('cors'),
    express = require('express');

var app = express();

app.get('/', cors(), function(req, res){
    request({
        uri: req.query.url,
        headers: req.query.headers ? JSON.parse(req.query.headers) : {}
    }, function(err, resp, body) {
        res.send(body);
    });
});

app.listen(3001);
