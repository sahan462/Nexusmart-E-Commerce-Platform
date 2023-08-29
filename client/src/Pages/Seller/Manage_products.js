import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from "./../../Components/Loading"

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPicURL, setproductPicURL] = useState('');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchProducts();
    }, [products]);

    const fetchProducts = async () => {
        try {
            const items = await fetch('')
            const dummyProducts = [
                { id: 1, name: 'Product 1', description: 'Description for Product 1', url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'},
                { id: 2, name: 'Product 2', description: 'Description for Product 2', url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
                { id: 2, name: 'Product 2', description: 'Description for Product 2', url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
                { id: 2, name: 'Product 2', description: 'Description for Product 2', url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
                { id: 2, name: 'Product 2', description: 'Description for Product 2', url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
                { id: 2, name: 'Product 2', description: 'Description for Product 2', url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
                // Add more dummy products here...
            ];

            setProducts(dummyProducts);
            setLoading(true);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    if (loading === false) {
        return (<Loading />);
    }
    console.log(products)

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setProductName(product.name);
        setProductDescription(product.description);
        setproductPicURL(product.url)
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
            <h2 className="mb-4 text-2xl font-bold text-center text-primary">My Products</h2>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 border rounded-lg shadow-md"
                    >
                        <div className='flex flex-wrap'>
                            <div className='flex flex-col flex-wrap w-2/3 '>
                                <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                                <p className="ml-3 text-gray-700">{product.description}</p>
                                <div className='flex'>
                                <button
                                    className={`mt-4 w-20 ml-6 px-2 py-1 font-semibold text-white bg-primary rounded hover:bg-opacity-80`}
                                    onClick={() => handleEditClick(product)}
                                >
                                    Edit
                                </button>
                                <button
                                    className={`mt-4 w-20 ml-6 px-2 py-1 font-semibold text-white bg-primary rounded hover:bg-opacity-80`}
                                    onClick={() => handleDeleteClick(product.id)}
                                >
                                    Delete
                                </button>
                                </div>
                            </div>
                            <img className = "flex object-scale-down w-1/3 h-48 rounded-full w-96:" src= {product.url}></img>
                        </div>
                    </div>
                ))}
            </div>

            {showEditDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className={`text-xl font-semibold mb-2 text-primary`}>Edit Product</h3>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:border-primary"
                        />
                        <textarea
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-primary"
                        />
                        <textarea
                            value={productPicURL}
                            onChange={(e) => setproductPicURL(e.target.value)}
                            className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-primary"
                        />
                        <button
                            className={`w-full px-4 py-2 font-semibold text-white bg-primary rounded hover:bg-opacity-80`}
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
