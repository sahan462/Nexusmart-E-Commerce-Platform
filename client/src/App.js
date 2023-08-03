import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Pages/Layout";
import LoginPage from "./Pages/LoginPage";
import UserRegisterPage from "./Pages/UserRegisterPage";
import SellerRegisterPage from "./Pages/SellerRegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register_user" element={<UserRegisterPage />} />
        <Route path="/register_seller" element={<SellerRegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
