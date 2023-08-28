const Feedback = require("../models/FeedbackModel");
const Item = require("../models/ItemModel");
const calcAverageRating = (userRatings) => {
    const totalRatings = userRatings.reduce((sum, rating) => sum + rating.starRating, 0);
    return ((totalRatings/userRatings.length).toFixed(2));
}
const reverseAverageRating = (userRatings) => {
    const totalRatings = userRatings.reduce((sum, rating) => sum - rating.starRating, 0);
    return ((totalRatings/userRatings.length).toFixed(2));
}
const addFeedback = async (req, res) => {

    try {

        const { itemId } = req.params;
        const { userId, starRating, comment } = req.body;

        const feedback = await Feedback.findOne({ itemId: itemId });
        const item = await Item.findOne({ _id: itemId });

        if(feedback){

            feedback.userRatings.push({
                userId: userId,
                starRating: starRating,
                comment: comment,
            });

            const averageStarRating = calcAverageRating(feedback.userRatings);
            feedback.averageStarRating = averageStarRating;
            await feedback.save();

            item.noOfStars = averageStarRating;
            await item.save();
            res.status(200).send(feedback);

        }else{

            let newFeedback = new Feedback({
                itemId: itemId,
                averageStarRating: starRating,
                userRatings: [{
                    userId: userId,
                    starRating: starRating,
                    comment: comment,
                }]
            });

            item.noOfStars = starRating;
            await item.save();

            const feedback = await Feedback.create(newFeedback);
            res.send(200).send(feedback);

        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

};

const viewFeedbacks = async (req, res) => {

    try{

        const { itemId } = req.params;

        const feedbackData = await Feedback.findOne({ itemId: itemId });
        if (feedbackData) {
            res.status(200).json({
                available: true,
                averageStarRating: feedbackData.averageStarRating,
                userRatings: feedbackData.userRatings
            });
        } else {
            res.status(200).json({ available: false });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

};

const updateFeedback = async (req, res) => {

    try {

        const { itemId, feedbackId } = req.query;
        const { starRating, comment } = req.body;

        const feedback = await Feedback.findOne({itemId: itemId});
        const userRating = feedback.userRatings.find(obj => obj._id.toString() === feedbackId);

        if (!userRating) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        const item = await Item.findOne({ _id: itemId });

        userRating.starRating = starRating;
        userRating.comment = comment;

        const averageStarRating = calcAverageRating(feedback.userRatings);
        feedback.averageStarRating = averageStarRating;
        await feedback.save();

        item.noOfStars = averageStarRating;
        await item.save();

        res.status(200).json(feedback);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }

};


const deleteFeedback = async (req, res) => {

    try {

        const { itemId, feedbackId } = req.query;
        const { starRating, comment } = req.body;

        const feedback = await Feedback.findOne({itemId: itemId});
        const userRating = feedback.userRatings.find(obj => obj._id.toString() === feedbackId);

        if (!userRating) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        const item = await Item.findOne({ _id: itemId });

        const averageStarRating = reverseAverageRating(feedback.userRatings);
        feedback.averageStarRating = averageStarRating;
        await feedback.save();

        item.noOfStars = averageStarRating;
        await item.save();

        res.status(200).json(feedback);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }

}

module.exports = {
    addFeedback,
    viewFeedbacks,
    updateFeedback,
    deleteFeedback
};
