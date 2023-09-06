import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Pages/Layout/Layout";
import LayoutLogInOut from "./Pages/Layout/LayoutLogInOut";
import LoginPage from "./Pages/LoginPage";
import BuyerRegisterPage from "./Pages/Buyer/BuyerRegisterPage";
import SellerRegisterPage from "./Pages/Seller/SellerRegisterPage";
import axios from "axios";
import { UserContextProvider } from "./AuthContext";
import SellerLayout from "./Pages/Layout/SellerLayout";
import AddProductPage from "./Pages/Seller/AddNewProducts";
import ProductsPage from "./Pages/Seller/Manage_products";
import ManageOrder from "./Pages/Seller/Oder_Management";
import ReviewList from "./Pages/Seller/ReviewList";
import ProfilePage from "./Pages/ProfilePage";
import ShoppingIndexPage from "./Pages/ShoppingIndexPage";
import ItemPage from "./Pages/ItemPage";
import CartPage from "./Pages/CartPage";
import OrderDetailsPage from "./Pages/Seller/OrderDetailsPage";
import Dashboard from "./Pages/Admin/Dashboard";
import TechnicalIssuePage from "./Pages/TechnicalIssuePage";
import CustomerSupportPage from "./Pages/Admin/CustomerSupportPage";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LayoutLogInOut />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register_user" element={<BuyerRegisterPage />} />
          <Route path="/register_seller" element={<SellerRegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/search" element={<ShoppingIndexPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/productpage"
            element={
              <SellerLayout>
                <ProductsPage />
              </SellerLayout>
            }
          />
          <Route
            path="/manageorder"
            element={
              <SellerLayout>
                <ManageOrder />
              </SellerLayout>
            }
          />
          <Route
            path="/reviewlist"
            element={
              <SellerLayout>
                <ReviewList />
              </SellerLayout>
            }
          />
          <Route
            path="/addproduct"
            element={
              <SellerLayout>
                <AddProductPage />
              </SellerLayout>
            }
          />
          <Route
            path="/orders/:orderId"
            element={
              <SellerLayout>
                <OrderDetailsPage />
              </SellerLayout>
            }
          />
          <Route path="/helpcenter" element={<TechnicalIssuePage />} />
          <Route
            path="dashboard/customersupport"
            element={<CustomerSupportPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
