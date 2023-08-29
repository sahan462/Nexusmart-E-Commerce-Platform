import React from 'react';
import { Link } from 'react-router-dom';

const orders = [
    { id: 1, customerUsername: 'user1', price: 100, quantity: 2 },
    { id: 2, customerUsername: 'user2', price: 150, quantity: 3 },
    { id: 1, customerUsername: 'user3', price: 120, quantity: 1 },
];

const groupOrdersByProductId = (orders) => {
    const groupedOrders = {};
    orders.forEach((order) => {
        if (!groupedOrders[order.id]) {
            groupedOrders[order.id] = [];
        }
        groupedOrders[order.id].push(order);
    });
    return groupedOrders;
};

const PlacedOrdersPage = () => {
    const groupedOrders = groupOrdersByProductId(orders);

    return (
        <div className="p-8">
            <h1 className="mb-4 text-2xl font-semibold">Placed Orders</h1>
            {Object.keys(groupedOrders).map((productId) => (
                <div key={productId} className="mb-4">
                    <h2 className="text-lg font-semibold">Product ID: {productId}</h2>
                    <ul className="space-y-4">
                        {groupedOrders[productId].map((order, index) => (
                            <li key={index} className="p-4 bg-white rounded-md shadow-md">
                                <Link to={`/orders/${order.id}`} className="text-blue-500 hover:underline">
                                    Customer: {order.customerUsername}, Price: ${order.price}, Quantity: {order.quantity}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PlacedOrdersPage;
