import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
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
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("/items/?sellerId=64e8a0375e24fe9e2b525ff3");
            setProducts(response.data);
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

    };

    const handleUpdateClick = async () => {
        try {
            await axios.put(`http://localhost:5000/items/?itemId=${selectedProduct.id}`, {
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
        //JSON.parse(userDataStorage)

        try {
            const response = await axios.delete(`/items/?itemId=${productId}`, {
                headers: {
                    'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoiNjRlODY2ZWU3YjI1MDZkMTJhOTE3ZTAzIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY5Mjk2ODk1Mn0.IjLn1o-mrcnlyStNAscP_0DybuzZx9dOia1h8eywLwo"
                    //'x-auth-token': `Bearer ${JSON.parse(localStorage.getItem("userDataStorage").token)}` // Adding the token to the Authorization header
                },
            })
            fetchProducts();
            console.log(response);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    console.log(JSON.parse(localStorage.getItem("userDataStorage")).token)
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-primary">My Products</h2>
            <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="p-4 border rounded-lg shadow-md"
                    >
                        <div className='flex flex-wrap '>
                            <div className='flex flex-col flex-wrap w-2/3 '>
                                <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
                                <p className="ml-3 text-gray-700">{product.overview}</p>
                                <div className='flex w-full mt-auto'>
                                    <button
                                        className={`mt-4 w-20 ml-6 px-2 py-1 font-semibold text-white bg-primary rounded hover:bg-opacity-80`}
                                    >
                                        <Link to={`/addproduct?id=${product._id}`} className="text-blue-500 hover:underline">
                                            Edit
                                        </Link>
                                    </button>
                                    <button
                                        className={`mt-4 w-20 ml-6 px-2 py-1 font-semibold text-white bg-primary rounded hover:bg-opacity-80`}
                                        onClick={() => handleDeleteClick(product.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <img className="flex ml-5 object-cover w-48 h-48 rounded-full" src={product.imgURL}></img>
                        </div>
                    </div>
                ))}
            </div>

            {/* {showEditDialog && (
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
            )} */}
        </div>
    );
}

export default ProductsPage;
