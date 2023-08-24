import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Pages/Layout/Layout";
import LoginPage from "./Pages/Buyer/LoginPage";
import UserRegisterPage from "./Pages/Buyer/UserRegisterPage";
import SellerRegisterPage from "./Pages/Seller/SellerRegisterPage";
import axios from "axios";
import {UserContextProvider} from "./AuthContext";


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
      <UserContextProvider>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<IndexPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register_user" element={<UserRegisterPage />} />
                  <Route path="/register_seller" element={<SellerRegisterPage />} />
              </Route>
          </Routes>
      </UserContextProvider>
  );
}

export default App;
