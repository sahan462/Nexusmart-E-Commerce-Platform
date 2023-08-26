const Feedback = require("../models/FeedbackModel");
const Item = require("../models/ItemModel");

const calcRating = async (itemID) => {
    const feedbacks = await Feedback.find({ itemId: itemID });

    if (feedbacks && feedbacks.length > 0) {
        const totalRatings = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
        return (totalRatings / feedbacks.length);
    }

    return 0; // Return 0 if there are no feedbacks for the item
};

const addFeedback = async (req, res) => {
    try {
        const { itemId } = req.query;
        const { buyerID, rating, comment } = req.body;
        if (rating > 0) {
            const newRate = await calcRating(itemID); // Calculate the new average rating
        }

        let newFeedback = new Feedback({
            itemId: itemId,
            userId: buyerID,
            rating: rating,
            comment: comment,
        });

        newFeedback = await Feedback.create(newFeedback);
        res.status(200).send(newFeedback);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const viewFeedbacks = async (req, res) => {

    const { itemId } = req.query;

    try{
        const feedbackData = await Feedback.find({ itemId: itemId });
        if (feedbackData) {
            res.status(200).json({ available: true, userRatings: feedbackData });
        } else {
            res.status(200).json({ available: false });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    viewFeedbacks,
    addFeedback,
};
