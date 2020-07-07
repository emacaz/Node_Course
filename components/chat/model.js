const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creando el esquema
const mySchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'User',
  }],
})

const model = mongoose.model('Chat', mySchema)
module.exports = model