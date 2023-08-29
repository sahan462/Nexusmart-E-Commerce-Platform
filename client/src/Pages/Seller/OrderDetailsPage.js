import React from 'react';
import { useParams } from 'react-router-dom';

const orders = [
    { id: 1, customerUsername: 'user1', price: 100, quantity: 2 },
];

const OrderDetailsPage = () => {
    const { orderId } = useParams();
    const order = orders.find(order => order.id === parseInt(orderId));

    if (!order) {
        return <div className="p-8">Order not found.</div>;
    }

    return (
        <div className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Order Details</h1>
            <div className="p-6 bg-white rounded-md shadow-md">
                <p>Customer: {order.customerUsername}</p>
                <p>Price: ${order.price}</p>
                <p>Quantity: {order.quantity}</p>
                <div className="mt-4">
                    <button className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md">Accept</button>
                    <button className="px-4 py-2 text-white bg-red-500 rounded-md">Decline</button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
