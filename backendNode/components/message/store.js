// Lógica de almancenamiento

// almacenamiento de mensajes
const db = require('mongoose')
const DB_NAME = 'mongodb+srv://user1234:user1234@cluster0-m9xn5.mongodb.net/test'
// conexión con la base de datos
// mongodb+srv://telegrom:user1234@cluster0-m9xn5.mongodb.net/<dbname>?retryWrites=true&w=majority
db.Promise = global.Promise
db.connect(DB_NAME, {
  useNewUrlParser: true
})
console.log('[db] conectada con éxito')
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