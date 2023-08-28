const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    averageStarRating: {
        type: Number,
        required: true,
        default: 0
    },
    userRatings: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        starRating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        comment: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
            required: true,
        },
    }],
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;

