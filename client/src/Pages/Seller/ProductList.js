import React from 'react';

const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
];

const ProductList = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-orange-600">Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="border-b py-2 hover:bg-orange-100">
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
