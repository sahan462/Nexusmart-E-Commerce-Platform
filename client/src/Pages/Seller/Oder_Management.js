import React from 'react';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';

const ManageOrder = () => {
    const selectedOrder = { id: 1, customer: 'John Doe', total: 100 };
    return (
        <div className="flex">
            <div className="flex-1 bg-gray-100">
                <div className="p-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <OrderList />
                        </div>
                        <div className="col-span-1">
                            <OrderDetails order={selectedOrder} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ManageOrder;