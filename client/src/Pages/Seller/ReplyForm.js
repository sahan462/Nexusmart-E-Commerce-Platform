import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ reviewId, productId }) => {
    const [reply, setReply] = useState('');

    const handleReplySubmit = async () => {
        try {
            const response = await axios.put(`/feedback/update/?itemId=${productId}&feedbackId=${reviewId}`, {
                "reply": reply
            });
            console.log(response);
            setReply('');
        } catch (error) {
            console.error('Error sending reply:', error);
        }
    };

    return (
        <div className="mt-4 ml-3">
            <textarea
                className="w-full p-2 border rounded"
                placeholder="Reply to the review..."
                value={reply}
                onChange={e => setReply(e.target.value)}
            ></textarea>
            <button
                className="px-4 py-2 mt-2 ml-3 text-white rounded bg-primary hover:bg-primary"
                onClick={handleReplySubmit}
            >
                Submit Reply
            </button>
        </div>
    );
};

export default ReplyForm;
