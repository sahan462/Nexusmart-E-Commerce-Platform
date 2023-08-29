import React, { useState } from 'react';

const DeleteUser = () => {
  const [userIdToDelete, setUserIdToDelete] = useState('');

  const handleUserIdChange = (event) => {
    setUserIdToDelete(event.target.value);
  };

  const handleDeleteUser = () => {
    
    console.log(`User with ID ${userIdToDelete} has been deleted.`);
    setUserIdToDelete('');
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form>
        <label>
          User ID:
          <input
            type="text"
            value={userIdToDelete}
            onChange={handleUserIdChange}
          />
        </label>
        <button type="button" onClick={handleDeleteUser}>
          Delete User
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;