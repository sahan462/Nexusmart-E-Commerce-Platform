const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
    items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
});
const ItemModel = mongoose.model('Cart', CartSchema);
module.exports = ItemModel;