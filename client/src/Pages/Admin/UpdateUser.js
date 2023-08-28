import React, { useState } from 'react';

const UpdateUser = () => {
  const [userData, setUserData] = useState({
    userId: '',
    newName: '',
    newEmail: '',
    //thawa update karanna oni monada?
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUpdateUser = () => {
    
    const updatedUser = {
      name: userData.newName,
      email: userData.newEmail,
      // thawa mona properties da add wenna oni?
    };

   
    console.log('Updated User:', updatedUser);
  };

  return (
    <div>
      <h2>Update User</h2>
      <form>
        <label>
          User ID:
          <input
            type="text"
            name="userId"
            value={userData.userId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          New Name:
          <input
            type="text"
            name="newName"
            value={userData.newName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          New Email:
          <input
            type="email"
            name="newEmail"
            value={userData.newEmail}
            onChange={handleInputChange}
          />
        </label>
        {/* thawa lables add kranna */}
        <button type="button" onClick={handleUpdateUser}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;