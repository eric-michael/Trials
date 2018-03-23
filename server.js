const express = require('express')
const app = express()
const port = 3000;

app.get('/', (request, response) => {
	response.send(`<h1>Home Page</h1>`)
	console.log('Someone visited!')
})

app.get('/hello', (request, response) => {
	response.send(`<h1>Hello, world!</h1>`)
	console.log('Saying hello...')
})

app.get('/bye', (request, response) => {
	response.send(`<p>Bye now.</p>`)
	console.log('Parting is such sweet sorrow')
})

app.listen(port)
console.log(`Server is listening on port ${port}`)
