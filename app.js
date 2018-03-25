// express for route-handling
const express = require('express')
const app = express()

// host:port config
const hostname = '127.0.0.1'
const PORT = process.env.PORT || 3000

// TODO: use express static to guide home index visitors to index.html in public folder

// routing
let index = require('./routes/index')
app.use('/', index)

let hello = require('./routes/hello')
app.use('/hello', hello)

let bye = require('./routes/bye')
app.use('/bye', bye)

let people = require('./routes/people')
app.use('/people', people)

app.listen(PORT)
console.log(`Server is listening at http://${hostname}:${PORT}`)
