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
    warranty: {
        available: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            required: function (){
                return this.warranty.available === true
            }
        }
    },
    returnItem: {
        canBeReturned: {
            type: Boolean,
            required: true,
            default: false
        },
        returnDays: {
            type: Number,
            default: 0,
            required: function () {
                return this.returnItem.canBeReturned === true;
            }
        }
    },
    delivery: {
        available: {
            type: Boolean,
            default: false,
            required: true
        },
        warehouse: {
            type: String,
            default: "Colombo",
            required: true
        },
        freeDelivery:{
            type: Boolean,
            default: false,
            required: true
        },
        cost: {
            type: Number,
            required: function (){
                return (this.delivery.freeDelivery === false);
            }
        },
        cashOnDelivery: {
            type: Boolean,
            default: true,
            required: true
        },
        estimateDeliveryDate: {
            type: Date,
            required: true
        }
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;