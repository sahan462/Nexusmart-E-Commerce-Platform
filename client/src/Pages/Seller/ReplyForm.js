import React, { useState } from 'react';

const ReplyForm = ({ reviewId }) => {
    const [reply, setReply] = useState('');

    const handleReplySubmit = () => {
        // BackEnd sent the reply
    };

    return (
        <div className="mt-4">
            <textarea
                className="w-full p-2 border rounded"
                placeholder="Reply to the review..."
                value={reply}
                onChange={e => setReply(e.target.value)}
            ></textarea>
            <button
                className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                onClick={handleReplySubmit}
            >
                Submit Reply
            </button>
        </div>
    );
};

export default ReplyForm;
