const Feedback = require("../models/FeedbackModel");
const Item = require("../models/ItemModel");
const UserRating = require("../models/UserRatingModel");

const calcAverageRating = (feedback) => {
    const totalRatings =
        feedback.oneStarCount +
        feedback.twoStarCount*2 +
        feedback.threeStarCount*3 +
        feedback.fourStarCount*4 +
        feedback.fiveStarCount*5;
    return ((totalRatings/feedback.totalRatings).toFixed(2));

}

const storeSingleRateCount = async (feedback, starRating) => {
    if(starRating === 1){
        feedback.oneStarCount = feedback.oneStarCount + 1;
    }else if(starRating === 2){
        feedback.twoStarCount = feedback.twoStarCount + 1;
    }else if(starRating === 3){
        feedback.threeStarCount = feedback.threeStarCount + 1;
    }else if(starRating === 4){
        feedback.fourStarCount = feedback.fourStarCount + 1;
    }else{
        feedback.fiveStarCount = feedback.fiveStarCount + 1;
    }
    await feedback.save();
}
const removeSingleRateCount = async (feedback, starRating) => {
    if(starRating === 1){
        feedback.oneStarCount = feedback.oneStarCount - 1;
    }else if(starRating === 2){
        feedback.twoStarCount = feedback.twoStarCount - 1;
    }else if(starRating === 3){
        feedback.threeStarCount = feedback.threeStarCount - 1;
    }else if(starRating === 4){
        feedback.fourStarCount = feedback.fourStarCount - 1;
    }else{
        feedback.fiveStarCount = feedback.fiveStarCount - 1;
    }
    await feedback.save();
}

const addFeedback = async (req, res) => {

    try {

        const { itemId } = req.params;
        const { userId, starRating, comment } = req.body;

        const userRating = await UserRating.create({
            userId: userId,
            starRating: starRating,
            comment: comment,
            itemId: itemId
        })

        const feedback = await Feedback.findOne({ itemId: itemId });
        const item = await Item.findOne({ _id: itemId });

        const userRatings = await UserRating.find({itemId: itemId});

        if(feedback){

            feedback.totalRatings = feedback.totalRatings + 1;
            await storeSingleRateCount(feedback, starRating);

            const averageStarRating = calcAverageRating(feedback);
            feedback.averageStarRating = averageStarRating;
            await feedback.save();

            item.noOfStars = averageStarRating;
            await item.save();

            res.status(200).json({newestFeedbackStatistics: feedback, userRatings: userRatings});

        }else{

            const newFeedback = await Feedback.create({
                itemId: itemId,
                averageStarRating: starRating,
                totalRatings: starRating,

            });

            await storeSingleRateCount(newFeedback, starRating);

            item.noOfStars = starRating;
            await item.save();

            res.status(200).json({newestFeedbackStatistics: newFeedback, userRatings: userRatings});

        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }

};

const viewFeedbacks = async (req, res) => {

    try{

        const { itemId } = req.params;

        const feedback = await Feedback.findOne({ itemId: itemId });

        if (feedback) {

            const userRatings = await UserRating.find({itemId: itemId});

            res.status(200).json({
                available: true,
                newestFeedbackStatistics: feedback,
                userRatings: userRatings
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
        const { starRating, comment, reply } = req.body;

        const userRating = await UserRating.findById(feedbackId);

        if(reply){
            await UserRating.updateOne(
                userRating,
                {
                    reply: reply ,
                },
                { new: true }
            );

            const userRatings = await UserRating.find({itemId: itemId});
            res.status(200).json({userRatings: userRatings});
        }else {

            const feedback = await Feedback.findOne({itemId: itemId});

            await removeSingleRateCount(feedback, userRating.starRating);
            await storeSingleRateCount(feedback, starRating);

            await UserRating.updateOne(
                userRating,
                {
                    starRating: starRating,
                    comment: comment
                },
                {new: true}
            );

            const averageStarRating = calcAverageRating(feedback);
            feedback.averageStarRating = averageStarRating;
            await feedback.save();

            const item = await Item.findOne({_id: itemId});
            await Item.updateOne(
                item,
                {
                    noOfStars: averageStarRating
                },
                {new: true}
            );

            const userRatings = await UserRating.find({itemId: itemId});
            res.status(200).json({newestFeedbackStatistics: feedback, userRatings: userRatings});
        }


    } catch (error) {
        res.status(400).send({ error: error.message });
    }

};


const deleteFeedback = async (req, res) => {

    try {

        const { itemId, feedbackId } = req.query;

        const userRating = await UserRating.findById(feedbackId);
        const feedback = await Feedback.findOne({itemId: itemId});

        await removeSingleRateCount(feedback, userRating.starRating);

        await UserRating.deleteOne(userRating);

        const averageStarRating = calcAverageRating(feedback);
        feedback.averageStarRating = averageStarRating;
        await  feedback.save();

        const item = await Item.findOne({ _id: itemId });
        await Item.updateOne(
            item,
            {
                noOfStars: averageStarRating
            },
            { new: true }
        );

        const userRatings = await UserRating.find({itemId: itemId});
        res.status(200).json({newestFeedbackStatistics: feedback, userRatings: userRatings});

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
