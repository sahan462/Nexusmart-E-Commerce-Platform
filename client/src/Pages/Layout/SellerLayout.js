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
        <img
          onClick={toggleSidebar}
          src='https://img.alicdn.com/imgextra/i4/O1CN01iMApHN1sQ8A3JzQm6_!!6000000005760-2-tps-88-88.png'
          alt="Sidebar Logo"
          className={`bg-neutral-50 space-y-10 rounded-full h-11 w-11`}
        />
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default SellerLayout;
