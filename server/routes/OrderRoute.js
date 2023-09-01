const express = require('express');
const router = express.Router();
const {purchase, myOrder, viewOrder} = require('../controllers/OrderController');
const {verifySignin, verifySeller} = require('../middleware/auth')


router.post('/purchase', verifySignin, purchase);
router.get('/my', verifySignin, myOrder);
router.get('/received', [verifySignin, verifySeller], viewOrder);

module.exports = router;