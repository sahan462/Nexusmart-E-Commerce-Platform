const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const buyerSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "Please enter a valid name"]
    },
    email: {
        type : String,
        required: [true, "Please enter a valid email address"],
        unique: true,
        lowercase : true,
        validate : [isEmail, 'Please enter a valid email address']
    },
    password: {
        type : String,
        required : [true, "Please enter a valid password"],
        minlength: [6, "Minimum length of the password is 6"]
    },
});

buyerSchema.pre('save', async function (next){
    const createdSalt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, createdSalt);
    next();
})

const buyerModel = mongoose.model('Buyer', buyerSchema);
module.exports = buyerModel;