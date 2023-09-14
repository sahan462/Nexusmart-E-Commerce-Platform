import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Loading from "./../../Components/Loading"

const predefinedOptions = [
    "Option 1",
    "Option 2",
    "Option 3"
];

const maincategory = [
    "Electronic",
    "Life Stle",
    "Home Equipment",
    "Foods and Beverages",
    "Sports and Entertainment"
];

const subcategories = [
    "Phones & Accessories",
    "Computers & Laptops",
    "TVs & Speakers",
    "Cameras",
    "Clothing & Apparel",
    "Shoes & Accessories",
    "Beauty & Personal Care",
    "Jewelry & Watches",
    "Furniture",
    "Kitchen & Dining",
    "Bedding & Bath",
    "Home Improvement",
    "Groceries",
    "Snacks & Sweets",
    "Beverages",
    "Cooking Ingredients",
    "Sports Equipment",
    "Fitness & Exercise",
    "Outdoor Recreation",
    "Video Games",
    "Movies & TV Shows",
    "Books & Magazines",
]

const warrantyDuratin = [
    "Days",
    "Months",
    "Years"
]

const locations = [
    "Colombo",
    "Kaluthera"
]

function AddProductPage() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ItemId = searchParams.get("id");

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [subProductImages, setSubProductImages] = useState(['', '', '']);
    const [productOverview, setProductOverview] = useState('');
    const [ProductMainCategory, setProductMainCategory] = useState('');
    const [ProductSubCategory, setProductSubCategory] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [isReturnAble, setReturnAble] = useState(false);
    const [returnDuration, setReturnDuration] = useState('');
    const [isWarrantyAvailable, setWarrantyAvailable] = useState(false);
    const [loading, setLoading] = useState(false)
    const [discount, setDiscount] = useState('');
    const [wherelocation, setlocation] = useState('');
    const [deliveryDuration, setDeliveryDuration] = useState('');
    const [isFreeDelivery, setFreeDelivery] = useState(false);
    const [isCashOnDelivery, setCashOnDelivery] = useState(false);
    const [deliveryCost, setDeliveryCost] = useState('');
    const [warrantyDuration, setWarrantyDuration] = useState('');
    const [warrantyDurationCategory, setWarrantyDurationCategory] = useState('');
    const [showErrorDialog, setShowErrorDialog] = useState(false);

    const product = {
        title: productName,
        overview: productOverview,
        description: productDescription,
        categories: { mainCategory: ProductMainCategory, subCategory: ProductSubCategory },
        imgURL: productImage,
        //TODO add images as a string
        quantity: productQuantity,
        price: productPrice,
        discount: { percentage: discount },
        warranty: { available: isWarrantyAvailable, duration: warrantyDuration, durationCategory: warrantyDurationCategory },
        returnItem: { canBeReturned: isReturnAble, returnDays: returnDuration },
        delivery: { available: isFreeDelivery, warehouse: wherelocation, freeDelivery: isFreeDelivery, cost: deliveryCost, cashOnDelivery: isCashOnDelivery, estimateDeliveryDutarion: deliveryDuration },
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            console.log(ItemId)
            const response = await axios.get(`/items?id=${ItemId}`);
            console.log(response)
            setProductName(response.data.title);
            setProductDescription(response.data.description)
            setProductPrice(response.data.price)
            setProductImage(response.data.imgURL)
            setProductOverview(response.data.overview)
            setProductMainCategory(response.data.categories)
            setProductQuantity(response.data.quantity)
            setFreeDelivery(response.data.delivery.freeDelivery)
            setCashOnDelivery(response.data.delivery.cashOnDelivery)
            setReturnAble(response.data.returnItem.canBeReturned)
            setWarrantyAvailable(response.data.warranty.available)
            if (response.data.discount) setDiscount(response.data.discount.percentage)
            // setDelivery(response.data.delivery.duration)
            setWarrantyDuration(response.data.warranty.duration)
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

    const handleProductSubImages = (event, index) => {
        const updatedSubProductImages = [...subProductImages]; // Create a copy of the current state array
        updatedSubProductImages[index] = event.target.value; // Update the value at the specified index
        setSubProductImages(updatedSubProductImages); // Set the state with the updated array
    }

    const handleProductOverview = (event) => {
        setProductOverview(event.target.value);
    }

    const handleProductMainCategory = (event) => {
        setProductMainCategory(event.target.value);
    }

    const handleProductSubCategory = (event) => {
        setProductSubCategory(event.target.value);
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

    const handleReturnDuration = (event) => {
        setReturnDuration(event.target.value)
    }

    const handleWarrantyChange = () => {
        setWarrantyAvailable(!isWarrantyAvailable);
    }

    const handleWarrantyDuration = (event) => {
        setWarrantyDuration(event.target.value)
    }

    const handleWarrantyDurationCategory = (event) => {
        setWarrantyDurationCategory(event.target.value)
    }

    const handleDeliveryDuration = (event) => {
        setDeliveryDuration(event.target.value)
    }

    const handleDeliverylocation = (event) => {
        setlocation(event.target.value)
    }

    const handleDeliveryCost = (event) => {
        setDeliveryCost(event.target.value)
    }
    const handleSetDiscount = (event) => {
        setDiscount(event.target.value)
        if (discount > 100) {
            setShowErrorDialog(true);
        }
    }

    const handleAddProduct = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem("userDataStorage"));
            console.log(userData.token)
            const response = await axios.post("/items/", product, {
                headers: {
                    'x-auth-token': userData.token
                }
            });
            console.log(response);
            if(response.addItem = "true"){
                alert("Product Added Successfully")
            }else{
                alert("Product Added Failed")
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateProduct = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem("userDataStorage"));
            console.log(userData.token)
            const response = await axios.put(`/items/${ItemId}`, product, {
                headers: {
                    'x-auth-token': userData.token
                }
            });
            console.log(response);
            if(response.updateProduct = "true"){
                alert("Product Successfully Updated")
            }else{
                alert("Product Update Failed")
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-primary">
                {ItemId === null ? "Add Product" : "Update Product"}
            </h2>
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
            <div className='flex flex-row'>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">Product MainCategory</label>
                    <select
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={ProductMainCategory}
                        onChange={handleProductMainCategory}
                    >
                        <option value="">Select an option</option>
                        {maincategory.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4 ml-10">
                    <label className="block font-semibold text-gray-700">Product SubCategory</label>
                    <select
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={ProductSubCategory}
                        onChange={handleProductSubCategory}
                    >
                        <option value="">Select an option</option>
                        {subcategories.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">Product Price</label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={productPrice}
                        onChange={handleProductPriceChange}
                    />
                </div>
                <div className="mb-4 ml-10">
                    <label className="block font-semibold text-gray-700">Discount(%)</label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={discount}
                        onChange={handleSetDiscount}
                    />
                </div>
                <div className="mb-4 ml-10">
                    <label className="block font-semibold text-gray-700">Product Quantity</label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={productQuantity}
                        onChange={handleProductQuantity}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block font-semibold text-gray-700">Product Main Image. Enter url</label>
                <textarea
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={productImage}
                    onChange={handleProductImageUpload}
                />
                <label className="block font-semibold text-gray-700 mb-3">Product Sub Image. Enter url</label>
                <textarea
                    className="ml-3 mb-2 w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={subProductImages[0]}
                    onChange={(event) => handleProductSubImages(event, 0)}
                />
                <textarea
                    className="ml-3 mb-2 w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={subProductImages[1]}
                    onChange={(event) => handleProductSubImages(event, 1)}
                />
                <textarea
                    className="ml-3 mb-2 w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                    value={subProductImages[2]}
                    onChange={(event) => handleProductSubImages(event, 2)}
                />
            </div>
            <div className='flex gap-10'>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">Delivery Duration(Days): </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={deliveryDuration}
                        onChange={handleDeliveryDuration}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">Delivery Cost </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={deliveryCost}
                        onChange={handleDeliveryCost}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">Location </label>
                    <select
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                        value={wherelocation}
                        onChange={handleDeliverylocation}
                    >
                        <option value="">Select an option</option>
                        {locations.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
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
                <div className="flex mb-4 ml-6">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isCashOnDelivery}
                        onChange={handleCashOnDeliveryChange}
                    />
                    <label className="block font-semibold text-gray-700">Cash On Delivery</label>
                </div>
                <div className="flex mb-4 ml-6">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isReturnAble}
                        onChange={handleReturnAbleChange}
                    />
                    <label className="block font-semibold text-gray-700">Can Be Returned</label>
                </div>
                <div className="flex mb-4 ml-6">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isWarrantyAvailable}
                        onChange={handleWarrantyChange}
                    />
                    <label className="block font-semibold text-gray-700">Warranty</label>
                </div>
            </div>
            <div className="flex gap-10 mb-4">
                <div>
                    <label className="block font-semibold text-gray-700">Warranty Duration</label>
                    <div className='flex gap-3'>
                        <input
                            type="number"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                            value={warrantyDuration}
                            onChange={handleWarrantyDuration}
                        />
                        <select
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                            value={warrantyDurationCategory}
                            onChange={handleWarrantyDurationCategory}
                        >
                            <option value="">Select an option</option>
                            {warrantyDuratin.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block font-semibold text-gray-700">Return Duration</label>
                    <div className='flex gap-3'>
                        <input
                            type="number"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary"
                            value={warrantyDuration}
                            onChange={handleReturnDuration}
                        />
                        <label className="block mt-2 font-semibold text-gray-700">Days</label>
                    </div>
                </div>
            </div>
            <button
                className="w-full px-4 py-2 font-semibold text-white rounded bg-primary hover:bg-primary"
                onClick={ItemId === null ? handleAddProduct : handleUpdateProduct}
            >
                {ItemId === null ? "Add Product" : "Update Product"}
            </button>
            {/* {showErrorDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    
                </div>
            )} */}
        </div>
    );
}

export default AddProductPage;