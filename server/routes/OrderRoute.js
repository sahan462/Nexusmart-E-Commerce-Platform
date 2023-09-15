const express = require('express');
const router = express.Router();
const {purchase, myOrder, viewOrder, allOrder, deleteOrder, updateStatus} = require('../controllers/OrderController');
const {verifySignin, verifySeller, verifyAdmin} = require('../middleware/auth')


router.post('/purchase', verifySignin, purchase);
router.get('/my', verifySignin, myOrder);
router.get('/received', [verifySignin, verifySeller], viewOrder);
router.get('/all', [verifySignin, verifyAdmin], allOrder);
router.get('/delete/:orderid', [verifySignin, verifyAdmin], deleteOrder);
router.get('/update/:orderid', [verifySignin, verifySeller], updateStatus);

module.exports = router;