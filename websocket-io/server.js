var express = require('express'),
    wsio = require('websocket.io')

var app = express.createServer()

var ws = wsio.attach(app)