const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://user1234:user1234@platzicluster.m9xn5.mongodb.net/telegrom?retryWrites=true&w=majority')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(router)

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(3000, () => {
  console.log('La aplicación está escuchando en http://localhost:3000')
})
