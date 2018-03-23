var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(response);
});

server.listen(8080);