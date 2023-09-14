import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './../../Components/Loading';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation dialog
    const [deleteProductId, setDeleteProductId] = useState(null);
    const [deleteProductTitle, setDeleteProductTitle] = useState(null); // Store the ID of the product to delete

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`/items/?sellerId`);
            setProducts(response.data);
            setLoading(true);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    if (loading === false) {
        return <Loading />;
    }

    const handleDeleteClick = (productId, productTitle) => {
        // Show the confirmation dialog when the "Delete" button is clicked
        setShowConfirmation(true);
        setDeleteProductId(productId);
        setDeleteProductTitle(productTitle)
    };

    const confirmDelete = async () => {
        try {
            setShowConfirmation(false); // Hide the confirmation dialog
            const userData = JSON.parse(localStorage.getItem('userDataStorage'));
            const response = await axios.delete(`/items/${deleteProductId}`, {
                headers: {
                    'x-auth-token': userData.token,
                },
            });
            alert(`"${deleteProductTitle}" has been deleted.`);
            fetchProducts();
            setDeleteProductId(null);
            setDeleteProductTitle(null);
            console.log(response);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const cancelDelete = () => {
        // Hide the confirmation dialog and reset the deleteProductId
        setShowConfirmation(false);
        setDeleteProductId(null);
        setDeleteProductTitle(null);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-primary">My Products</h2>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="p-4 border rounded-lg shadow-md">
                        <div className="flex flex-row">
                            <div className="flex flex-col flex-wrap w-2/3">
                                <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
                                <p className="ml-3 text-gray-700">{product.overview}</p>
                                <div className="flex w-full mt-auto">
                                    <Link to={`/addproduct?id=${product._id}`} className="text-blue-500 hover:underline">
                                        <button className="mt-4 w-20 ml-6 px-2 py-1 font-semibold text-white bg-primary rounded hover:bg-opacity-80">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        className="mt-4 w-20 ml-6 px-2 py-1 font-semibold text-white bg-primary rounded hover:bg-opacity-80"
                                        onClick={() => handleDeleteClick(product._id, product.title)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <img className="flex object-cover w-1/3 h-48 ml-5 rounded-full" src={product.imgURL} alt="Resource is not available"></img>
                        </div>
                    </div>
                ))}
            </div>
            {/* Confirmation dialog */}
            {showConfirmation && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>Are you sure you want to delete "{deleteProductTitle}"?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="px-4 py-2 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={confirmDelete}
                            >
                                Yes
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                onClick={cancelDelete}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductsPage;
