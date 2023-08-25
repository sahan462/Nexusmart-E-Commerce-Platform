import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const coreColor = '#FD5417';

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setProductName(product.name);
        setProductDescription(product.description);
        setShowEditDialog(true);
    };

    const handleUpdateClick = async () => {
        try {
            await axios.put(`/api/products/${selectedProduct.id}`, {
                name: productName,
                description: productDescription,
            });
            setShowEditDialog(false);
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDeleteClick = async (productId) => {
        try {
            await axios.delete(`/api/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-orange-500">My Products</h2>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 border rounded-lg shadow-md"
                    >
                        <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-700">{product.description}</p>
                        <button
                            className={`mt-4 px-2 py-1 font-semibold text-white bg-${coreColor} rounded hover:bg-opacity-80`}
                            onClick={() => handleEditClick(product)}
                        >
                            Edit
                        </button>
                        <button
                            className={`mt-2 px-2 py-1 font-semibold text-white bg-red-500 rounded hover:bg-red-600`}
                            onClick={() => handleDeleteClick(product.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {showEditDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className={`text-xl font-semibold mb-2 text-${coreColor}`}>Edit Product</h3>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:border-orange-500"
                        />
                        <textarea
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-orange-500"
                        />
                        <button
                            className={`w-full px-4 py-2 font-semibold text-white bg-${coreColor} rounded hover:bg-opacity-80`}
                            onClick={handleUpdateClick}
                        >
                            Update
                        </button>
                        <button
                            className={`w-full mt-2 px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600`}
                            onClick={() => setShowEditDialog(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductsPage;
