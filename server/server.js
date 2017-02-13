var express = require('express');
var mongoose = require('mongoose');

var app = express();
var server = require('http').createServer(app); 
var io = require('socket.io')(server);

// connect to mongo database named "hooliplus"
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/hooliplus');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
server.listen(8000); //app.listen

// socket io connection
// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });


// export our app for testing and flexibility, required by index.js
module.exports = app;
