const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({

});


const buyerModel = mongoose.model('Buyer', buyerSchema);
module.exports = buyerModel;