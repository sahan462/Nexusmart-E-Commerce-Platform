import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Loading from "./../../Components/Loading"

const predefinedOptions = [
    "Option 1",
    "Option 2",
    "Option 3"
    // Add more options as needed
];

function AddProductPage() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ItemId = searchParams.get("id");

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productOverview, setProductOverview] = useState('');
    const [ProductCategory, setProductCategory] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [isFreeDelivery, setFreeDelivery] = useState(false);
    const [isCashOnDelivery, setCashOnDelivery] = useState(false);
    const [isReturnAble, setReturnAble] = useState(false);
    const [isWarrantyAvailable, setWarrantyAvailable] = useState(false);
    const [loading, setLoading] = useState(false)

    const product = {
        title: productName,
        overview: productOverview,
        description: productDescription,
        categories: ProductCategory,
        price: productPrice,
        quantity: productQuantity,
        imgURL: productImage,
        delivery: isFreeDelivery,
        returnItem: isReturnAble,
        warranty: isWarrantyAvailable,

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`/items?id=${ItemId}`);
            setProductName(response.data.title);
            setProductDescription(response.data.description)
            setProductPrice(response.data.price)
            setProductImage(response.data.imgURL)
            setProductOverview(response.data.overview)
            setProductCategory(response.data.categories)
            setProductQuantity(response.data.quantity)
            setFreeDelivery(response.data.delivery)
            setCashOnDelivery(response.data.delivery)
            setReturnAble(response.data.returnItem)
            setWarrantyAvailable(response.data.warranty)
            setLoading(true);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    console.log("rendered");

    if (ItemId) {
        if (loading === false) {
            return (<Loading />);
        }

    }

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
        setProductImage(event.target.value);
    };

    const handleProductOverview = (event) => {
        setProductOverview(event.target.value);
    }

    const handleProductCategory = (event) => {
        setProductCategory(event.target.value);
    }

    const handleProductQuantity = (event) => {
        setProductQuantity(event.target.value);
    }

    const handleisFreeDeliveryChange = () => {
        setFreeDelivery(!isFreeDelivery);
    };

    const handleCashOnDeliveryChange = () => {
        setCashOnDelivery(!isCashOnDelivery);
    };

    const handleReturnAbleChange = () => {
        setReturnAble(!isReturnAble);
    }

    const handleWarrantyChange = () => {
        setWarrantyAvailable(!isWarrantyAvailable);
    }

    const handleAddProduct = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem("userDataStorage"));
            const response = await axios.post("/items/", product, {
                headers: {
                    'x-auth-token': userData.token
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
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
                <label className="block font-semibold text-gray-700">Product Overview</label>
                <textarea
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productOverview}
                    onChange={handleProductOverview}
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
                <label className="block font-semibold text-gray-700">Product Category</label>
                <select
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={ProductCategory}
                    onChange={handleProductCategory}
                >
                    <option value="">Select an option</option>
                    {predefinedOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
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
                <label className="block font-semibold text-gray-700">Product Quantity</label>
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productQuantity}
                    onChange={handleProductQuantity}
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold text-gray-700">Product Image. Enter url</label>
                <textarea
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productImage}
                    onChange={handleProductImageUpload}
                />
            </div>
            <div className="flex mb-4">
                <div className="flex mb-4">
                    <input
                        type="checkbox"
                        className="mr-2 border-primary"
                        checked={isFreeDelivery}
                        onChange={handleisFreeDeliveryChange}
                    />
                    <label className="block font-semibold text-gray-700">Free Delivery</label>
                </div>
                <div className="ml-6 mb-4 flex">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isCashOnDelivery}
                        onChange={handleCashOnDeliveryChange}
                    />
                    <label className="block font-semibold text-gray-700">Cash On Delivery</label>
                </div>
                <div className="ml-6 mb-4 flex">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isReturnAble}
                        onChange={handleReturnAbleChange}
                    />
                    <label className="block font-semibold text-gray-700">Can Be Returned</label>
                </div>
                <div className="ml-6 mb-4 flex">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isWarrantyAvailable}
                        onChange={handleWarrantyChange}
                    />
                    <label className="block font-semibold text-gray-700">Warranty</label>
                </div>
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