const { Schema, model } = require('mongoose')

const TestSchema = new Schema({
    name: { type: String, required: true, unique: true },
})
  
module.exports = model('Test', TestSchema)