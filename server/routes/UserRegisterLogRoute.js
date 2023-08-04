const express = require('express');

//getting router instance
const router = express.Router();

const {login, registerBuyer, registerSeller} = require('../controllers/UserRegisterLogController')

router.post('/register_user',registerBuyer);
router.post('/register_seller', registerSeller);
router.post('/login',login);

module.exports = router;