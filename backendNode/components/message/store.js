// Lógica de almancenamiento

// almacenamiento de mensajes
const db = require('mongoose')

// conexión con la base de datos

// función para añadir mensajes
addMessage = message => list.push(message)

// función para obtener mensajes
getMessages = () => {return list}

module.exports = {
  add: addMessage,
  list: getMessages,
  // get
  // update
  // delete
}