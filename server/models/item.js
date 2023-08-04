const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        
    },
    email: String,
    password:String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;