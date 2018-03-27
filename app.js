// express for route-handling
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const path = require('path')

// host:port config
const hostname = 'localhost'
const port = process.env.PORT || 3000

// register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '/public'));

// routing
let index = require('./routes/index')
app.use('/', index)

let hello = require('./routes/hello')
app.use('/hello', hello)

let bye = require('./routes/bye')
app.use('/bye', bye)

let users = require('./routes/users')
app.use('/users', users)

app.listen(port)
console.log(`Server is listening at http://${hostname}:${port}`)
