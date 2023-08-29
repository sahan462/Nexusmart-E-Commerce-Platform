import React from "react";
import { Link } from "react-router-dom";
import RevenueGraph from "./Components/RevenueGraph";
import Trafic from "./Components/Trafic";
import PopularProducts from "./Components/PopularProducts";

const Dashboard = () => {
  const adminProfile = {
    profilePicture: "path-to-profile-picture.jpg",
    userEmail: "admin@example.com",
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 class="mb-4 text-lg font-semibold">Admin Panel</h2>
        {/* Admin Profile Section */}
        <div className="admin-profile w-full rounded bg-gray-300">
          <div className="profile-details">
            <img src={adminProfile.profilePicture} alt="Admin Profile" />
            <p>{adminProfile.userEmail}</p>
          </div>
        </div>

        {/* Page Links */}

        <ul class="space-y-2">
          <li>
            <button class="w-full rounded bg-blue-500 px-4 py-2 text-white">
              <Link to="./UpdateHomePage.js">Update Home Page</Link>
            </button>
          </li>
          <li>
            <button class="w-full rounded bg-blue-500 px-4 py-2 text-white">
              <Link to="./UserManage.js">Manage User</Link>
            </button>
          </li>
          <li>
            <button class="w-full rounded bg-blue-500 px-4 py-2 text-white">
              <Link to="./CreateNotification.js">Send Notification</Link>
            </button>
          </li>
          <li>
            <button class="w-full rounded bg-blue-500 px-4 py-2 text-white">
              <Link to="./CustomerSupport.js">Customer Support</Link>
            </button>
          </li>
        </ul>
      </div>

      <div className="w-3/4 p-4">
        <div className="mb-4 flex">
          <div className="mr-2 h-32 w-1/2 flex-shrink-0 bg-gray-200">
            Graph of Total Revenue
            <RevenueGraph />
          </div>

          <div className="h-32 w-1/2 flex-shrink-0 bg-gray-200">
            Visiters count,Pages views and trafic sources
            <Trafic />
          </div>
        </div>

        <div className="h-64 bg-gray-200">
          Popular Product List
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
