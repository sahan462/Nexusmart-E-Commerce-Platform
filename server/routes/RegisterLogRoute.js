const express = require('express');

//getting router instance
const router = express.Router();

const {register,login} = require('../controllers/RegisterLogControl')

router.post('/register',register);
router.post('/login',login);

module.exports = router;