const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

router.post('/', cartController.addToCart);
router.put('/', cartController.editCartItem);
router.delete('/', cartController.removeCartItem);
router.get('/', cartController.viewCart);

module.exports = router;