import React from 'react';
import HeaderFile from './HeaderPage';
import { Outlet } from 'react-router-dom';

function Layout({ isSidebarOpen }) {
    return (
        <div className={`flex ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : ''}`}>
                <div className={`px-4 pb-4 ${isSidebarOpen ? 'header-open' : ''}`}>
                    <HeaderFile />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
