const Order = require('../models/OrderModel');
const Cart = require('../models/CartModel');
const Item = require('../models/ItemModel');

const viewOrder = async (req, res) => {
    const {id} = req.body;
    try{
        const orders = await Order.find({sellerId: id}).populate('buyerId', 'name').populate('item', 'price');
        res.status(200).send(orders);
    } catch(error){
        res.status(200).send({error: error.message});
    }
}

const myOrder = async (req, res) => {
    const {id} = req.body;
    try{
        const orders = await Order.find({buyerId: id});
        res.status(200).send(orders);
    } catch(error){
        res.status(200).send({error: error.message});
    }
}

const purchase = async (req, res) => {
    const { id, shipAddress } = req.body;
    try {
        const cart = await Cart.findOne({ buyerId: id }).populate('items.item');
        if(!cart) throw Error('Cart is empty');

        const cartItems = cart.items;
        for (let cartItem of cartItems) {
            const item = await Item.findById(cartItem.item._id);
            if (!item) {
                continue;
            }

            await Order.create({
                sellerId: item.seller,
                buyerId: cart.buyerId,
                item: cartItem.item._id,
                quantity: cartItem.quantity,
                shipadress: shipAddress,
                shipstatus: "new"
            });
        }

        cart.items = [];
        await cart.save();
        res.status(200).send("Successfully perchased");
    } catch(error){
        res.status(200).send({error: error.message});
    }
}

module.exports = {
    viewOrder,
    myOrder,
    purchase
}