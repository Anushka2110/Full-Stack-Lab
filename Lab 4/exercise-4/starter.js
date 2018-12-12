var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    console.log('request received');
    res.end('received');
  
}).listen(1337, '127.0.0.1');