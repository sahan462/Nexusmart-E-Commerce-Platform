const express = require('express');
const router = express.Router();

const {viewFeedbacks, addFeedback} = require('../controllers/FeedbackController');

router.post('/', addFeedback);
router.get('/',viewFeedbacks);

module.exports = router;