const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})
const Users = mongoose.model('User', userSchema); // database collation name disided 'User'
module.exports = Users;