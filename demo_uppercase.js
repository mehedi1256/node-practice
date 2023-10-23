var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var str = 'hello world';
    res.write(str.toUpperCase());
    res.end();
}).listen(8080);