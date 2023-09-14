const express = require('express');
const router = express.Router();
const {viewFeedbacks, addFeedback, updateFeedback, deleteFeedback} = require('../controllers/FeedbackController');
const {verifySignin} = require('../middleware/auth')

router.get('/:itemId', viewFeedbacks);
router.post('/newfeedback/:itemId', verifySignin, addFeedback);
router.put('/update', updateFeedback);
router.delete('/delete', deleteFeedback);

module.exports = router;