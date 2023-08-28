const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    overview: {
        type: String
    },
    description: {
        type: String
    },
    categories: [
        {
            type: String,
            required: true,
        },
    ],
    images: [
        {
            url: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
        },
    ],
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
    availableColors: [
        {
            name: {
                type: String,
                required: true,
            },
            hexCode: {
                type: String,
                required: true,
            },
        },
    ],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;