const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');

router.post('/', itemController.addItem);
router.get('/', itemController.viewItems);
router.put('/', itemController.changeItemProp);
router.delete('/', itemController.deleteItem);

module.exports = router;