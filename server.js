var express = require('express');
var app = express();

app.get('/', (request, response) => {
	response.send('<h1>Home page</h1>');
});

app.get('/hello', (request, response) => {
	response.send('<h1>Hello!</h1>');
});

app.get('/bye', (request, response) => {
	response.send('<h2>Bye!</h2>');
});

app.listen(3000);
console.log('Server is listening on port 3000');
