var express = require('express')
var app = express()
var people = [
  {
    "name": "Narcissus",
    "age": 4,
  },
  {
    "name": "Nemesis",
    "age": 5
  }
]
app.get('/', (request, response) => {
  var locations = ['Clearwater', 'Orlando', 'Tampa', 'Boston']
  response.send(locations)
})

app.get('/object', (request, response) => {
  response.send(404);
})

app.get('/people', (request, response) => {
  response.send(people)
})

app.get('/people/:id', (request, response) => {
  if (request.params.id <= people.length) {
    response.send(people[request.params.id])
  }
  else {
    response.send(404);
  }
})

// TODO: write our own middleware

app.listen(8800)

console.log("Listening on port 8800")
