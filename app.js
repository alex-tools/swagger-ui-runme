var http = require('http');
var express = require('express');
var ecstatic = require('ecstatic');

var app = express();
app.use(ecstatic({ root: __dirname + '/swagger-ui/dist' }));
http.createServer(app).listen(8080);

console.log('Swagger UI console listening on :8080');
