const Cart = require('../models/CartModel');

exports.addToCart = async (req, res) => {
    try {
        const { buyerId, itemId, quantity } = req.body;
        let cart = await Cart.findOne({ buyerId: buyerId });

        if (!cart) {
            cart = await Cart.create({ buyerId: buyerId, items: [{ item: itemId, quantity: quantity}] });
        } else {
            let itemIndex = cart.items.findIndex(p => p.item.toString() === itemId);
            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            } else {
                cart.items.push({ item: itemId, quantity: quantity });
            }
            await cart.save();
        }

        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

exports.editCartItem = async (req, res) => {
    try {
        const { buyerId, itemId, quantity } = req.body;
        const cart = await Cart.findOne({ buyerId: buyerId });

        let itemIndex = cart.items.findIndex(p => p.item.toString() === itemId);
        
        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex];
            productItem.quantity = quantity;
            cart.items[itemIndex] = productItem;
            await cart.save();
        } else {
            throw Error('Item not found in cart');
        }

        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

exports.removeCartItem = async (req, res) => {
    try {
        const { buyerId, itemId } = req.body;
        const cart = await Cart.findOne({ buyerId: buyerId });

        let itemIndex = cart.items.findIndex(p => p.item.toString() === itemId);
        
        if (itemIndex > -1) {
            cart.items.splice(itemIndex, 1);
            await cart.save();
        } else {
            throw Error('Item not found in cart');
        }

        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

exports.viewCart = async (req, res) => {
    try {
        const { buyerId } = req.params;
        const cart = await Cart.findOne({ buyerId: buyerId }).populate('items.item', 'name price');

        if (!cart) {
            return res.status(400).send({
                error: 'No cart found'
            });
        }

        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};
