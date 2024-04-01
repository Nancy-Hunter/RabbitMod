const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  petName: { 
    type: String, 
    unique: true, 
},
  petAge: {
    type: Number
},
  description: {
    type: String
},
})

module.exports = mongoose.model('Pet', PetSchema)