const mongoose = require('mongoose');

const roundToTwoDecimal = (value) => {
    return Math.round(value * 100) / 100;
};

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
    categories: {
        mainCategory: {
            type: String,
        },
        subCategory: {
            type: String,
        }
    },
    brand: {
        type: String
    },
    imgURL: {
        type: String,
        required: true
    },
    images: [
        {
            url: {
                type: String,
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
      required: true,
      set: roundToTwoDecimal
    },
    discount: {
        percentage: {
            type: Number,
        },
        newPrice: {
            type: Number,
            set: roundToTwoDecimal
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
            },
            hexCode: {
                type: String,
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
        },
        durationCategory:{
            type: String,
            required: function (){
                return this.warranty.available === true
            }
        },
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
            // required: true
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
            },
            set: roundToTwoDecimal
        },
        cashOnDelivery: {
            type: Boolean,
            default: true,
            required: true
        },
        estimateDeliveryDate: {
            type: Date,
        },
        estimateDeliveryDutarion: {
            type: Number,
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