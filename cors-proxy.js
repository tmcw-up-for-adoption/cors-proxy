#!/usr/bin/env node

var request = require('request'),
    cors = require('cors'),
    argv = require('optimist').argv,
    express = require('express');

var app = express();

var dumbCache = {};

app.get('/', cors(), function(req, res) {
    if (argv.cache && dumbCache[req.query.url]) {
        return res.send(dumbCache[req.query.url]);
    }
    request({
        uri: req.query.url,
        headers: req.query.headers ? JSON.parse(req.query.headers) : {},
        auth: req.query.auth ? JSON.parse(req.query.auth) : null
    }, function(err, resp, body) {
        if (argv.cache) dumbCache[req.query.url] = body;
        res.set({
            'Content-Type': 'application/xml'
        });
        res.send(body);
    });
});

app.listen(3001);
