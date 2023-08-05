const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity:{
        type: Number,
        required: true

    },
    price: {
        type:Number,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    }
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;