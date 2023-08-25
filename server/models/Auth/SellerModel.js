const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
});


const sellerModel = mongoose.model('Seller', sellerSchema);
module.exports = sellerModel;