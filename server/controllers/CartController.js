const Cart = require("../models/CartModel");
const addToCart = async (req, res) => {
  try {
    const { id, itemId, quantity } = req.body;
    let cart = await Cart.findOne({ buyerId: id });

    if (!cart) {
      cart = await Cart.create({
        buyerId: id,
        items: [{ item: itemId, quantity: quantity }],
      });
    } else {
      let itemIndex = cart.items.findIndex((p) => p.item.toString() === itemId);
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
      error: error.message,
    });
  }
};

const editCartItem = async (req, res) => {
  try {
    const { id, itemId, quantity } = req.body;
    const cart = await Cart.findOne({ buyerId: id });
    if (!cart) throw Error("Cart is empty");

    let itemIndex = cart.items.findIndex((p) => p.item.toString() === itemId);

    if (itemIndex > -1) {
      let productItem = cart.items[itemIndex];
      productItem.quantity = quantity;
      cart.items[itemIndex] = productItem;
      await cart.save();
    } else {
      throw Error("Item not found in cart");
    }

    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { id } = req.body;
    const { itemId } = req.query;
    const cart = await Cart.findOne({ buyerId: id });

    let itemIndex = cart.items.findIndex((p) => p.item.toString() === itemId);

    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
    } else {
      throw Error("Item not found in cart");
    }

    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

const viewCart = async (req, res) => {
  try {
    const { id } = req.body;
    const cart = await Cart.findOne({ buyerId: id }).populate({
      path: "items.item",
      select: "title price seller imgURL discount.percentage",
      populate: {
        path: "seller",
        select: "name",
      },
    });

    if (!cart) {
      return res.status(400).send({
        error: "No cart found",
      });
    }

    res.status(200).send(cart);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
};

module.exports = {
  addToCart,
  editCartItem,
  removeCartItem,
  viewCart,
};
