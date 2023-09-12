import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from "./../../Components/Loading"

// const orders = [
//     { id: 1, customerUsername: 'user1', price: 100, quantity: 2 },
//     { id: 2, customerUsername: 'user2', price: 150, quantity: 3 },
//     { id: 1, customerUsername: 'user3', price: 120, quantity: 1 },
// ];

const groupOrdersByProductId = (orders) => {
    const groupedOrders = {};
    orders.forEach((order) => {
        if (!groupedOrders[order.item]) {
            groupedOrders[order.item] = [];
        }
        groupedOrders[order.item].push(order);
    });
    return groupedOrders;
};

const PlacedOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const userData = JSON.parse(localStorage.getItem("userDataStorage"));
        try {
            const response = await axios.get("/order/received", {
                headers: {
                    'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FoYW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoiNjRlODY2ZWU3YjI1MDZkMTJhOTE3ZTAzIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY5Mjk5ODA3Nn0.JVR0JJIZr0jmNI-7pbptUerkgpbPgCgNBu-EhGj7wIo"
                }
            });
            setOrders(response.data);
            setLoading(true);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    if (loading === false) {
        return (<Loading />);
    }

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
                                    Customer: {order.buyerId}, Quantity: {order.quantity}
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
