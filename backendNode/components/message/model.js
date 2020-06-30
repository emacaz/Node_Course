const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creando el esquema
const mySchema = new Schema({
  user: String,

  // nos aseguramos que siempre haya un mensaje y no que guarde un mesaje en blanco
  message: {
    type: String,
    required: true,
  },
  date: Date,
})

const model = mongoose.model('Message', mySchema)
module.exports = model