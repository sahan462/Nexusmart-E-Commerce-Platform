import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext";
import { useContext } from "react";
import logo from "./../../assets/logo.png";

function HeaderLogInOut() {
  const { userData } = useContext(UserContext);

  return (
    <header className="z-20 border-b border-gray-300 bg-white sticky top-0 w-full h-20 grid grid-cols-12">
      {/* Logo here  */}
      <div className=" h-full col-span-2 flex items-center justify-start">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-6 h-6" alt="Logo" src={logo} />

          <span className="font-bold">NexusMart</span>
        </Link>
      </div>

      {/* Search bar here  */}
      <div className=" h-full col-span-8 flex items-center px-1"></div>
      {/* Profile/ myselling/ login here  */}
      <div className=" h-full col-span-2 flex justify-end items-center"></div>
    </header>
  );
}

export default HeaderLogInOut;
