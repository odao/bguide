var log = require('./log'),
    logger = log.create(log.INFO, 'bguide.log'),
    express = require('express'),
    app = express.createServer();
//    io = require('socket.io').listen(app);

app.listen(80);

app.configure(function (){
    app.use(express.static(__dirname + '/public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'show me the money!' }));
    app.use(express.errorHandler());
});

app.get('/', function (req, res){
    res.sendfile(__dirname + '/index.html');
});

/*
io.sockets.on('connection', function(socket){
    var pushTime = function(){
        socket.emit('nowtime', {now: new Date()});    
   };
    setInterval(pushTime, 5*1000);
});
*/

app.post('/login', function (req, res){
//    logger.info(req.body);
    res.send(req.body);
});

process.on('uncaughtException', function(err){
    logger.error('uncaught Exception occurred:' + err);
});