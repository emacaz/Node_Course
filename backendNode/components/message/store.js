const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://user1234:user1234@platzicluster.m9xn5.mongodb.net/telegrom?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
console.log('[db] conectada con éxito')


function addMessage (message) {
  // list.push(message)
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessages() {
  // return list
  const messages = await Model.find()
  return messages
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  })

  foundMessage.message = message

  const newMessage = await foundMessage.save()
  return newMessage
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText
  // get
  // update
  // delete
}