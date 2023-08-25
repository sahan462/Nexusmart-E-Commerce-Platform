import React from 'react';

const OrderDetails = ({ order }) => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <p>Order ID: {order.id}</p>
            <p>Customer: {order.customer}</p>
            <p>Total: ${order.total}</p>
        </div>
    );
};

export default OrderDetails;
