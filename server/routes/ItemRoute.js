const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');
const auth = require('../middleware/auth')

router.post('/',[auth.verifySignin, auth.verifySeller], itemController.addItem);
router.get('/', itemController.viewItems);
router.put('/',[auth.verifySignin, auth.verifySeller], itemController.changeItemProp);
router.delete('/',[auth.verifySignin, auth.verifySeller], itemController.deleteItem);

module.exports = router;