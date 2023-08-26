import React from 'react';
import ReplyForm from './ReplyForm';

const reviews = [
    { id: 1, product: 'Product A', review: 'Great product!', reply: null },
    { id: 2, product: 'Product B', review: 'Not satisfied...', reply: null },
];

const ReviewList = () => {
    return (
        <div>
            <div className="p-8">
                <div className="bg-gray-100 rounded-md shadow-md">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4 text-orange-600">Manage Reviews</h2>
                        {reviews.map(review => (
                            <div key={review.id} className="border-b py-4">
                                <p className="font-semibold">{review.product}</p>
                                <p>{review.review}</p>
                                {review.reply && (
                                    <div className="mt-2 bg-gray-100 p-2 rounded">
                                        <p className="font-semibold">Seller's Reply:</p>
                                        <p>{review.reply}</p>
                                    </div>
                                )}
                                {!review.reply && <ReplyForm reviewId={review.id} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;