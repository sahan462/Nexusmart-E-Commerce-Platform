const express = require('express');
const router = express.Router();
const {addToCart, editCartItem, removeCartItem, viewCart} = require('../controllers/CartController');
const {verifyBuyer, verifySeller, verifySignin} = require('../middleware/auth')

router.post('/', verifySignin, addToCart);
router.put('/', verifySignin, editCartItem);
router.delete('/', verifySignin, removeCartItem);
router.get('/', verifySignin, viewCart);

module.exports = router;