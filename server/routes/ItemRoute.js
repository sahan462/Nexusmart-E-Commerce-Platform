const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');
const {verifySeller, verifySignin} = require('../middleware/auth')

router.post('/',[verifySignin, verifySeller], itemController.addItem);
router.get('/', itemController.viewItems);
router.put('/:itemId',[verifySignin, verifySeller], itemController.changeItemProp);
router.delete('/:itemId',[verifySignin, verifySeller], itemController.deleteItem);

module.exports = router;