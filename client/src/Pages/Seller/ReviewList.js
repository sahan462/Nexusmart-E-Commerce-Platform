import React, { useState, useEffect } from 'react';
import ReplyForm from './ReplyForm';
import axios from 'axios';
import Loading from './../../Components/Loading';

const ReviewList = () => {
    const [expandedProducts, setExpandedProducts] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reviewsData, setReviewsData] = useState({});

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("/items/?sellerId");
            setProducts(response.data);
            setLoading(true);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchFeedbackInfo = async (productId) => {
        try {
            const response = await axios.get(`/feedback/${productId}`);
            console.log(response)
            if (response.data.available === true) {
                console.log(response.data);
                setReviewsData({ ...reviewsData, [productId]: response.data });
            }
            setLoading(true);
        } catch (error) {
            console.error('Error fetching feedback info:', error);
        }
    };

    const toggleProductExpansion = async (productId) => {
        if (!expandedProducts[productId]) {
            console.log("-------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>")
            fetchFeedbackInfo(productId);
            setLoading(false);
        }

        setExpandedProducts((prevExpanded) => ({
            ...prevExpanded,
            [productId]: !prevExpanded[productId],
        }));
    };

    if (loading === false) {
        return <Loading />;
    }

    return (
        <div>
            <div className="p-8">
                <div className="bg-gray-100 rounded-md shadow-md">
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold text-primary">Manage Reviews</h2>
                        <div className="ml-3">
                            {products.map((product) => (
                                <div key={product._id} className="py-4 border-b">
                                    <p
                                        className="font-semibold cursor-pointer"
                                        onClick={() => toggleProductExpansion(product._id)}
                                    >
                                        {product.title}
                                    </p>
                                    {expandedProducts[product._id] && reviewsData[product._id] && (
                                        <>
                                            <p className='ml-3'>Average Star Rating: {reviewsData[product._id].newestFeedbackStatistics.averageStarRating}</p>
                                            <p className='ml-3'>Total Ratings: {reviewsData[product._id].newestFeedbackStatistics.totalRatings}</p>
                                            {reviewsData[product._id].userRatings.map((rating) => (
                                                <div key={rating._id} className="mt-2 ml-6 bg-gray-100 rounded">
                                                    <p>Star Rating: {rating.starRating}</p>
                                                    <p>Comment: {rating.comment}</p>
                                                    <p>Date: {new Date(rating.date).toLocaleString()}</p>
                                                    {!rating.reply ? (
                                                        <ReplyForm reviewId={rating._id} productId={product._id} />
                                                    ) : (
                                                        <div className="mt-2 ml-6 bg-gray-100 rounded">
                                                            <p>Reply: {rating.reply}</p>
                                                        </div>
                                                    )}

                                                </div>
                                            ))}
                                        </>
                                    )}
                                    {expandedProducts[product._id] && !reviewsData[product._id] && (
                                        <p>No feedback available for this product.</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;
