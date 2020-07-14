// Este archivo se encarga de generar el servidor Socket, de generar una instancia y de compartirla
const socketIO = require('socket.io')
const socket = {}

function connect(server) {
  socket.io = socketIO(server)
}

module.exports = {
  connect,
  socket,
}