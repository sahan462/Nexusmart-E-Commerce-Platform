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
    <div className="flex p-4">
      <div className="w-1/4 bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="mb-4 text-lg font-semibold">Admin Panel</h2>
        {/* Admin Profile Section */}
        <div className="admin-profile w-full rounded-full bg-gray-300 p-2">
          <div className="h-20 bg-gray-800 rounded-full w-20 mx-auto">
            <img
              src={adminProfile.profilePicture}
              alt="Admin Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="text-center">{adminProfile.userEmail}</p>
        </div>

        {/* Page Links */}
        <ul className="space-y-2 mt-4">
          <li>
            <Link
              to="/dashboard/CustomerSupport"
              className="block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Customer Support
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/UpdateHomePage"
              className="block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Update Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/UserManage"
              className="block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Manage User
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/CreateNotification"
              className="block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Send Notification
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-3/4 p-4">
        <div className="mb-4 flex">
          <div className="mr-2 h-32 w-1/2 flex-shrink-0 bg-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">
              Graph of Total Revenue
            </h3>
            <RevenueGraph />
          </div>

          <div className="h-32 w-1/2 flex-shrink-0 bg-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">
              Visitors Count, Page Views, and Traffic Sources
            </h3>
            <Trafic />
          </div>
        </div>

        <div className="h-64 bg-gray-200 rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Popular Product List</h3>
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
