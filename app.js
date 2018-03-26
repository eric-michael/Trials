// express for route-handling
const express = require('express')
const app = express()

// host:port config
const hostname = 'localhost'
const PORT = process.env.PORT || 3000

// routing
let index = require('./routes/index')
app.use('/', index)

let hello = require('./routes/hello')
app.use('/hello', hello)

let bye = require('./routes/bye')
app.use('/bye', bye)

let users = require('./routes/users')
app.use('/api/users', users)

app.listen(PORT)
console.log(`Server is listening at http://${hostname}:${PORT}`)
