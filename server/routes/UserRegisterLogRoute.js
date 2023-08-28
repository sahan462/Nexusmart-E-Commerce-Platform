const express = require('express');
const router = express.Router();

const {registerBuyer} = require('../controllers/Auth/BuyerRegisterController');
const {registerSeller} = require('../controllers/Auth/SellerRegisterController');
const {login, logout} = require('../controllers/Auth/UserLoginLogoutController');

router.post('/register_buyer',registerBuyer);
router.post('/register_seller', registerSeller);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;