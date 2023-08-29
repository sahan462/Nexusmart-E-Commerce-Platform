import React, { useState } from 'react';

function AddProductPage() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductDescriptionChange = (event) => {
        setProductDescription(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleProductImageUpload = (event) => {
        setProductImage(event.target.files[0]);
    };

    const handleAddProduct = () => {
        // Here you can perform the product addition logic
        // Upload product data and image to your backend
        // Reset form fields after successful addition
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-primary">Add Product</h2>
            <div className="mb-4">
                <label className="block font-semibold text-gray-700">Product Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productName}
                    onChange={handleProductNameChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold text-gray-700">Product Description</label>
                <textarea
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productDescription}
                    onChange={handleProductDescriptionChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold text-gray-700">Product Price</label>
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productPrice}
                    onChange={handleProductPriceChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold text-gray-700">Product Image</label>
                <input
                    type="file"
                    accept="image/*"
                    className="w-full py-2 focus:outline-none focus:border-primary"
                    onChange={handleProductImageUpload}
                />
            </div>
            <button
                className="w-full px-4 py-2 font-semibold text-white rounded bg-primary hover:bg-primary"
                onClick={handleAddProduct}
            >
                Add Product
            </button>
        </div>
    );
}

export default AddProductPage;
