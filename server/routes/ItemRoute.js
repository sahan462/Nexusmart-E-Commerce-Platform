const express = require('express');
const router = express.Router();
const {addItem, viewItems, changeItemProp, deleteItem} = require('../controllers/ItemController');
const {verifySeller, verifySignin} = require('../middleware/auth')

router.post('/',[verifySignin, verifySeller], addItem);
router.get('/', viewItems);
router.get('/getItems', [verifySignin, verifySeller], viewItems)
router.put('/:itemId',[verifySignin, verifySeller], changeItemProp);
router.delete('/:itemId',[verifySignin, verifySeller], deleteItem);

module.exports = router;