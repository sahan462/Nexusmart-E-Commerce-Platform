import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddressInformation() {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [area, setArea] = useState('');
    const [district, setDistrict] = useState('');

    const navigate = useNavigate();

    const coreColor = '#FD5417';

    const handleNextClick = async () => {
        const addressData = {
            country,
            state,
            area,
            district
            // Other data properties
        };
        try {
            await axios.post('/api/save-address', addressData);
            navigate('/Verification');
        } catch (error) {
            console.error('Error saving address data:', error);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className={`text-2xl font-bold mb-4 text-${coreColor}`}>Address Information</h2>
            <div className="mt-4">
                <label htmlFor="country" className="block font-semibold text-gray-700">Country</label>
                <select
                    id="country"
                    className="w-full p-2 border rounded focus:outline-none focus:border-orange-500"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select a country</option>
                    <option value="country1">Country 1</option>
                    <option value="country2">Country 2</option>
                </select>
            </div>
            <div className="mt-4">
                <label htmlFor="state" className="block font-semibold text-gray-700">State</label>
                <select
                    id="state"
                    className="w-full p-2 border rounded focus:outline-none focus:border-orange-500"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                    <option value="">Select a country</option>
                    <option value="state1">Country 1</option>
                    <option value="state2">Country 2</option>
                </select>
            </div>
            <div className="mt-4">
                <label htmlFor="area" className="block font-semibold text-gray-700">Area</label>
                <select
                    id="area"
                    className="w-full p-2 border rounded focus:outline-none focus:border-orange-500"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                >
                    <option value="">Select a country</option>
                    <option value="area1">Country 1</option>
                    <option value="area2">Country 2</option>
                </select>
            </div>
            <div className="mt-4">
                <label htmlFor="district" className="block font-semibold text-gray-700">District</label>
                <select
                    id="district"
                    className="w-full p-2 border rounded focus:outline-none focus:border-orange-500"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                >
                    <option value="">Select a country</option>
                    <option value="district1">Country 1</option>
                    <option value="district2">Country 2</option>
                </select>
            </div>
            <button
                className={`w-full mt-2 px-4 py-2 font-semibold text-white bg-red-400 rounded hover:bg-red-500`}
                onClick={handleNextClick}
            >
                Next
            </button>
        </div>
    );
}

export default AddressInformation;
