import { Outlet } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import Footer from "../../Components/Footer";

function Layout() {
  return (
    <div>
      <div className="px-4 ">
        <HeaderPage />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
