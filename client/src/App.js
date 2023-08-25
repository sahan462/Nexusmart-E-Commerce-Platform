import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/Layout/IndexPage";
import SellerLayout from "./Pages/Layout/SellerLayout";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SellerRegPage from "./Pages/Seller/SellerRegPage";
import AddressInformation from "./Pages/Seller/AddAddress";
import VerificationPage from "./Pages/Seller/Verification";
import AddProductPage from "./Pages/Seller/AddNewProducts";
import ProductsPage from "./Pages/Seller/Manage_products";
import Layout from "./Pages/Layout/Layout";
import ManageOrder from "./Pages/Seller/Oder_Management";
import ReviewList from "./Pages/Seller/ReviewList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        {<Route path="/addproduct" element={<SellerLayout><AddProductPage /></SellerLayout>} />}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sellerreg" element={<SellerRegPage/>} />
        <Route path="/Selladdress" element={<AddressInformation/>}/>
        <Route path="/Verification" element = {<VerificationPage/>}/>
        <Route path="/productpage" element = {<SellerLayout><ProductsPage/></SellerLayout>}/>
        <Route path="/manageorder" element = {<SellerLayout><ManageOrder/></SellerLayout>}/>
        <Route path="/reviewlist" element = {<SellerLayout><ReviewList/></SellerLayout>}/>
      </Route>
    </Routes>
  );
}

export default App;
