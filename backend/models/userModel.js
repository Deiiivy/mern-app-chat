const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    confirmPassword: {
        type: String,
        required: true
    }
})


const userModel = mongoose.model('users', userSchema)

module.exports = userModel