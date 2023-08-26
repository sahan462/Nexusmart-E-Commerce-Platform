import React from 'react';

const OrderList = () => {
    const orders = [
        { id: 1, customer: 'John Doe', total: 100 },
        { id: 2, customer: 'Jane Smith', total: 150 },
    ];

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id} className="border-b py-2">
                        Order ID: {order.id}<br />
                        Customer: {order.customer}<br />
                        Total: ${order.total}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
