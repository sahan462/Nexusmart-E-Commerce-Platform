import HeaderFile from "./HeaderPage";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-4 pb-4">
      <HeaderFile />
      <Outlet />
    </div>
  );
}

export default Layout;
