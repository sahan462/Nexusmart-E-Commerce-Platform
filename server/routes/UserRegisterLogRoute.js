const express = require('express');
const router = express.Router();

const {registerBuyer} = require('../controllers/Auth/BuyerRegisterController');
const {registerSeller} = require('../controllers/Auth/SellerRegisterController');
const {login} = require('../controllers/Auth/UserLoginController');

router.post('/register_buyer',registerBuyer);
router.post('/register_seller', registerSeller);
router.post('/login',login);

module.exports = router;