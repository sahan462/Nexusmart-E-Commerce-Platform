import { Outlet } from "react-router-dom";
import HeaderPage from "./HeaderPage";

function Layout() {
  return (
    <div className="px-4 pb-4">
      <HeaderPage />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
