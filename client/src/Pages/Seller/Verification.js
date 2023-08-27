import React, { useState } from 'react';

function VerificationPage() {
    const [accountType, setAccountType] = useState('');
    const [idFront, setIdFront] = useState(null);
    const [idBack, setIdBack] = useState(null);
    const [passbook, setPassbook] = useState(null);
    const [accountHolderName, setAccountHolderName] = useState('');
    const [bankName, setBankName] = useState('');
    const [bankCode, setBankCode] = useState('');
    const [branchName, setBranchName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    const handleIdFrontUpload = (event) => {
        setIdFront(event.target.files[0]);
    };

    const handleIdBackUpload = (event) => {
        setIdBack(event.target.files[0]);
    };

    const handlePassbookUpload = (event) => {
        setPassbook(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform the form submission and data processing
        // Upload images and other data to your backend
        // Reset form fields after successful submission
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Account Verification</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block font-semibold">Account Type</label>
                    <select value={accountType} onChange={handleAccountTypeChange}>
                        <option value="">Select account type</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                    </select>
                </div>

                {/* Individual Account Fields */}
                {accountType === 'individual' && (
                    <div>
                        <label>Upload ID Front</label>
                        <input type="file" accept="image/*" onChange={handleIdFrontUpload} />

                        {/* Similar input for ID Back */}

                        {/* Other individual-specific fields */}
                    </div>
                )}

                {/* Common Fields */}
                <label>Upload Passbook Front</label>
                <input type="file" accept="image/*" onChange={handlePassbookUpload} />

                <label>Account Holder Name</label>
                <input
                    type="text"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                />

                {/* Other common fields */}

                <button
                    type="submit"
                    className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default VerificationPage;
