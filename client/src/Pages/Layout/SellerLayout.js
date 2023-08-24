import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SellerLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div
        className={`flex-1 ${isSidebarOpen ? 'ml-64' : ''} transition-all duration-300`}
      >
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default SellerLayout;
