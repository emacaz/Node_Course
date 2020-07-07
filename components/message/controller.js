const store = require('./store')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.log('[messageController] no hay usuario o mensaje');
      
      reject('Los datos son incorrectos')
      return false
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(), //nueva fecha en js
    }
    store.add(fullMessage)
    resolve(fullMessage)
  })
}


function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })
}


function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid Data')
      return false
    }
    const result = await store.updateText(id, message)
    resolve(result)
  })
}


function deleteMessages(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id inválido')
      return false
    }

    store.remove(id)
      .then(() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}


module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessages,
}