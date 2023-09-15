const express = require('express');
const router = express.Router();
const {viewFeedbacks, addFeedback, updateFeedback, deleteFeedback} = require('../controllers/FeedbackController');
const {verifySignin, verifyBuyer} = require('../middleware/auth')

router.get('/:itemId', viewFeedbacks);
router.post('/newfeedback/:itemId', verifySignin, addFeedback);
router.put('/update', verifySignin,updateFeedback);
router.delete('/delete', verifySignin,deleteFeedback);

module.exports = router;