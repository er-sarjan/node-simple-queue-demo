var NodeQueue=require('node-simple-queue').NodeQueue;
var NodeWeb = require('node-simple-queue').NodeQueueWeb;
var express = require('express');
var queueWeb = new NodeWeb();
var queue=new NodeQueue();

queue.enqueueJob('Queue1','TestJob',{number:1}, function () {
  console.log('job done');
});

var app = express();
var server = require('http').createServer(app);
app.use(queueWeb.route);
server.listen('9000', function () {
  console.log('Express server listening 9000');
  console.log('Go to http://localhost:9000/');
});