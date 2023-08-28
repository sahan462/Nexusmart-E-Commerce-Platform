const express = require('express');
const router = express.Router();
const {addToCart, editCartItem, removeCartItem, viewCart} = require('../controllers/CartController');

router.post('/', addToCart);
router.put('/', editCartItem);
router.delete('/', removeCartItem);
router.get('/', viewCart);

module.exports = router;