const express = require('express');
const router = express.Router();
const {addDeliveryPartner} = require('../controllers/DeliveryPathnerController');

router.get('/', addDeliveryPartner);


module.exports = router;