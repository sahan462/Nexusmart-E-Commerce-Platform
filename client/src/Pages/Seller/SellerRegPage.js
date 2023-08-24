import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

import { useState } from 'react';

function SellerRegPage() {
    return (
        <>
            <div class="p-4">
                <div class="text-left text-xl font-bold">New Seller Verification</div>
                <div class="mt-4">Profile Information</div>
                <div class="mt-2 p-4 bg-gray-100">
                    <div class="flex mb-2 items-center">
                        <label for="storeName" class="block font-semibold w-1/3">Store Name</label>
                        <input type="text" id="storeName" class="w-2/3 border rounded p-2" placeholder="Enter store name"></input>
                    </div>
                    <div class="flex mb-2 items-center">
                        <label for="email" class="block font-semibold w-1/3">Email</label>
                        <div class="w-2/3 flex">
                            <input type="email" id="email" class="w-4/5 border rounded-l p-2" placeholder="Enter email"></input>
                            <button class="w-1/5 bg-transparent text-blue-500 hover:underline">Change</button>
                        </div>
                    </div>
                    <div class="flex mb-2 items-center">
                        <label for="phone" class="block font-semibold w-1/3">Phone Number</label>
                        <div class="w-2/3 flex">
                            <input type="tel" id="phone" class="w-4/5 border rounded-l p-2" placeholder="Enter phone number"></input>
                            <button class="w-1/5 bg-transparent text-blue-500 hover:underline">Change</button>
                        </div>
                    </div>
                </div>
                <button class="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"><Link to="/Selladdress">Next</Link></button>
            </div>
        </>
    );
}

export default SellerRegPage;
