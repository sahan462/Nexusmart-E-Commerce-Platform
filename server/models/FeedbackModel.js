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
    oneStarCount: {
        type: Number,
        default: 0
    },
    twoStarCount: {
        type: Number,
        default: 0
    },
    threeStarCount: {
        type: Number,
        default: 0
    },
    fourStarCount: {
        type: Number,
        default: 0
    },
    fiveStarCount: {
        type: Number,
        default: 0
    },
    totalRatings: {
        type: Number,
        required: true,
        default: 0
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;

