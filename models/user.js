const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: [5, 'Too short'] }
})

const User = mongoose.model('User', userSchema)

module.exports = User
