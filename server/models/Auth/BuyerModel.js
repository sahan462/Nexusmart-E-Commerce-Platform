const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    baseData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
});


const buyerModel = mongoose.model('Buyer', buyerSchema);
module.exports = buyerModel;