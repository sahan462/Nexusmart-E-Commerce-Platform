import React, { useState } from 'react';

const CreateNotification = () => {
  const [notificationData, setNotificationData] = useState({
    recipients: 'all', // other options:- registered, recentPurchases 
    notificationType: 'announcement', // other options:-promotion,reminder
    content: '',
    scheduledTime: '', 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotificationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateNotification = () => {
   
    console.log('Notification Created:', notificationData);

      setNotificationData({
      recipients: 'all',
      notificationType: 'announcement',
      content: '',
      scheduledTime: '',
    });
  };

  return (
    <div>
      <h2>Create Notification</h2>
      <form>
        <label>
          Recipients:
          <select
            name="recipients"
            value={notificationData.recipients}
            onChange={handleInputChange}
          >
            <option value="all">All Users</option>
            <option value="registered">Registered Users</option>
            {/* thawa monawada recipient options? */}
          </select>
        </label>
        <label>
          Notification Type:
          <select
            name="notificationType"
            value={notificationData.notificationType}
            onChange={handleInputChange}
          >
            <option value="announcement">Announcement</option>
            <option value="promotion">Promotion</option>
            {/* thawa monada notification type options? */}
          </select>
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={notificationData.content}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Scheduled Time:
          <input
            type="datetime-local"
            name="scheduledTime"
            value={notificationData.scheduledTime}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleCreateNotification}>
          Create Notification
        </button>
      </form>
    </div>
  );
};

export default CreateNotification;