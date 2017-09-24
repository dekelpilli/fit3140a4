const express = require('express'),
app = express(),
server = require('http').Server(app),
io = require('socket.io')(server)
fs = require('fs')
routes = require('./app/routes/index.js'),
dataReader = require('./app/dataReader.js')
dataReadWrite = require('./app/dataReadWrite.js')

// serves static pages
app.use('/', express.static(__dirname + '/public')) 
// routes connections
routes(app)
dataReadWrite(fs)
dataReader(io, fs)


server.listen(8080, function() {
    console.log('Visit localhost:8080')
})
