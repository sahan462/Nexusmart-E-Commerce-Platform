const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imgURL: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
        percentage: {
            type: Number,
        },
        newPrice: {
            type: Number,
        }
    },
    noOfStars: {
        type: Number,
        default: 0
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;