const mongoose = require('mongoose');
const {isEmail} = require('validator');

const SellerSchema = new mongoose.Schema({
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
        required : [true, "Please enter valid password"],
        minlength : [6, "Minimum length of the password is 6"]
    }
});

const SellerModel = mongoose.model('Seller', SellerSchema);

exports.seller = SellerModel;
exports.SellerSchema = SellerSchema;