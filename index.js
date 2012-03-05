var app = require('express').createServer(),
    io = require('socket.io').listen(app);

app.listen(9999);

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
    socket.emit('', {});    
});
    
