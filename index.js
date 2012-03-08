var express = require('express'),
    app = express.createServer(),
    io = require('socket.io').listen(app);

app.listen(9999);

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
    console.log('root: ' + __dirname);
});

io.sockets.on('connection', function(socket){
    var pushTime = function(){
        socket.emit('nowtime', {now: new Date()});    
   };
    setInterval(pushTime, 5*1000);
});
    
