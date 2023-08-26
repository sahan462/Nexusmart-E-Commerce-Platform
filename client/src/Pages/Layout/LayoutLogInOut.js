import { Outlet } from "react-router-dom";
import HeaderLogInOut from "./HeaderLogInOut";

function LayoutLogInOut() {
  return (
    <div className="px-4 pb-4">
      <HeaderLogInOut />
      <Outlet />
    </div>
  );
}

export default LayoutLogInOut;
