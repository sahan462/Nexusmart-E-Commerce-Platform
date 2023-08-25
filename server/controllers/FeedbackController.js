const Feedback = require("../models/FeedbackModel");
const Item = require("../models/ItemModel");

const calcRating = async (rating, itemID) => {
    const feedbacks = await Feedback.find({itemId: itemID});
    if(feedbacks){
        const len = feedbacks.length;
        console.log(feedbacks);
    }
}
const addFeedback = async (req, res) => {

    try{

        const {itemID} = req.query;
        const {buyerID, rating, comment} = req.body;

        if(rating > 0){
            const newRate = calcRating(rating, itemID);
        }

        let newFeedback = new Feedback({
            itemId: itemID,
            userId: buyerID,
            rating: rating,
            comment: comment
        })
        newFeedback = await Feedback.create(newFeedback);
        res.status(200).send(newFeedback);

    }catch (error) {
        res.status(400).send({error: error.message});
    }

};

const viewFeedbacks = async (req, res) => {

    try {
        const {itemId} = req.query;

        const feedbackData = await Feedback.find({itemId: itemId})
        if(feedbackData) {
            res.status(200).json({available: true, userRatings: feedbackData})
        } else {
            res.status(200).json({available: false})
        }

    } catch (error) {
        res.status(400).send({error: error.message});
    }

};



module.exports = {
    viewFeedbacks,
    addFeedback
}