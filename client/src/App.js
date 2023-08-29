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
import AddressInformation from "./Pages/Seller/AddAddress";
import VerificationPage from "./Pages/Seller/Verification";
import AddProductPage from "./Pages/Seller/AddNewProducts";
import ProductsPage from "./Pages/Seller/Manage_products";
import ManageOrder from "./Pages/Seller/Oder_Management";
import ReviewList from "./Pages/Seller/ReviewList";
import ProfilePage from "./Pages/ProfilePage";
import ShoppingIndexPage from "./Pages/ShoppingIndexPage";
import ItemPage from "./Pages/ItemPage";
import OrderDetailsPage from './Pages/Seller/OrderDetailsPage';
import Dashboard from "./Pages/Admin/Dashboard";

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
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/search" element={<ShoppingIndexPage />} />
          <Route path="/Selladdress" element={<AddressInformation />} />
          <Route path="/Verification" element={<VerificationPage />} />
          <Route path="/item" element={<ItemPage />} />
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
          <Route path="/orders/:orderId"
            element={
              <SellerLayout>
                <OrderDetailsPage/>
              </SellerLayout>
            }/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
