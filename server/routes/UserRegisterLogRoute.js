const express = require('express');
const router = express.Router();

const {registerBuyer} = require('../controllers/Auth/BuyerRegisterController');
const {registerSeller} = require('../controllers/Auth/SellerRegisterController');
const {login} = require('../controllers/Auth/UserLoginController');

router.post('/registerBuyer',registerBuyer);
router.post('/registerSeller', registerSeller);
router.post('/login',login);

module.exports = router;