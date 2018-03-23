var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('Got a visit.');
	response.writeHead(200);
	response.end('Hello, from HTTP');
});

server.listen(8080);

module.exports.world = function() {
	console.log('Hello, world!');
}