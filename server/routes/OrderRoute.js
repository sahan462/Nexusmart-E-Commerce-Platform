const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const auth = require('../middleware/auth')

router.post('/purchase', auth.verifySignin, orderController.purchase);
router.get('/my', auth.verifySignin, orderController.myOrder);
router.get('/received', [auth.verifySignin, auth.verifySeller], orderController.viewOrder);

module.exports = router;