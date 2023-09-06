import React, { useState } from 'react';
import ReplyForm from './ReplyForm';

const reviews = [
    { id: 1, product: 'Product A', review: 'Great product!', reply: null },
    { id: 2, product: 'Product B', review: 'Not satisfied...', reply: null },
    // Add more reviews...
];

const ReviewList = () => {
    const [expandedProducts, setExpandedProducts] = useState({});

    const toggleProductExpansion = (product) => {
        setExpandedProducts((prevExpanded) => ({
            ...prevExpanded,
            [product]: !prevExpanded[product],
        }));
    };

    return (
        <div>
            <div className="p-8">
                <div className="bg-gray-100 rounded-md shadow-md">
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold text-primary">Manage Reviews</h2>
                        <div className='ml-3'>
                            {reviews.map(review => (
                                <div key={review.id} className="py-4 border-b">
                                    <p
                                        className="font-semibold cursor-pointer"
                                        onClick={() => toggleProductExpansion(review.product)}
                                    >
                                        {review.product}
                                    </p>
                                    {expandedProducts[review.product] && (
                                        <>
                                            <p>{review.review}</p>
                                            {review.reply && (
                                                <div className="p-2 mt-2 ml-3 bg-gray-100 rounded">
                                                    <p className="font-semibold">Seller's Reply:</p>
                                                    <p>{review.reply}</p>
                                                </div>
                                            )}
                                            {!review.reply && <ReplyForm reviewId={review.id} />}
                                        </>
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
