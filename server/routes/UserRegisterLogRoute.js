const express = require('express');
const router = express.Router();
const {login, registerBuyer, registerSeller} = require('../controllers/UserRegisterLogController')

router.post('/registerBuyer',registerBuyer);
router.post('/registerSeller', registerSeller);
router.post('/login',login);

module.exports = router;