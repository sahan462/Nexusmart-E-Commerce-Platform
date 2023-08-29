import React from 'react';
import { Link } from 'react-router-dom';

const orders = [
    { id: 1, customerUsername: 'user1', price: 100, quantity: 2 },
];

const PlacedOrdersPage = () => {
    return (
        <div className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Placed Orders</h1>
            <ul className="space-y-4">
                {orders.map((order, index) => (
                    <li key={index} className="p-4 bg-white rounded-md shadow-md">
                        <Link to={`/orders/${order.id}`} className="text-blue-500 hover:underline">
                            Customer: {order.customerUsername}, Price: ${order.price}, Quantity: {order.quantity}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlacedOrdersPage;
