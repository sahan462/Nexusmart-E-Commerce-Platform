const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number
    },
    shipadress: {
        type: String
    },
    shipstatus: {
        type: String,
        default: "new"
    }
});
const OrderModel = mongoose.model('Order', OrderSchema);
module.exports = OrderModel;