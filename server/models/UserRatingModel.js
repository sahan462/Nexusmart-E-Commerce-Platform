const mongoose = require('mongoose');

const userRatingSchema = new mongoose.Schema({
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
    reply: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    itemId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }
});

const userRating = mongoose.model('userRating', userRatingSchema);

module.exports = userRating;
