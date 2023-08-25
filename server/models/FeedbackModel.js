const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
