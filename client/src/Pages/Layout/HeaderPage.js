import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// import { logo } from "./../../assets/logo.png";

function HeaderPage() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${searchInput}`);
    }
  };

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
      <div className=" h-full col-span-8 flex items-center px-1">
        <div className="w-full h-12 px-4 py-2 flex justify-between items-center border-2 rounded-full border-gray-200">
          <input
            type="text"
            placeholder="Search items here"
            className="w-full mr-6 focus:outline-none"
            value={searchInput}
            onChange={(ev) => {
              setSearchInput(ev.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <Link to={`/search?q=${searchInput}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#127dff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* Profile/ myselling/ login here  */}
      <div className=" h-full col-span-2 flex justify-end items-center">
        {/* cart here  */}
        <div className=" mx-5 h-14 relative">
          <Link className="flex  h-14 items-center justify-center" to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="h-6 w-6 px-2 hover:text-primary"
            />
          </Link>
          <div className="bg-primary text-white flex items-center text-sm justify-center absolute top-1 right-0 h-5 w-5 border border-none rounded-full">
            5
          </div>
        </div>

        {/* Seller Dashboard  */}
        {!!userData && userData.role === "seller" && (
          <Link to="/productpage">
            <div className="h-10 px-5 mr-5 bg-primary text-white text-sm font-semibold  border border-none rounded-lg flex justify-center items-center hover:bg-primary_hover">
              My Selling
            </div>
          </Link>
        )}

        {/* Profile  */}
        {!!userData && (
          <Link to="/profile">
            <div className=" h-10 w-10 font-bold text-lg text-primary border border-primary rounded-full flex justify-center items-center hover:bg-primary_hover hover:text-white">
              {userData.name[0].toUpperCase()}
            </div>
          </Link>
        )}

        {/* Login Button */}
        {!userData && (
          <Link
            to="login"
            className="
            h-12
            px-10
          flex
          items-center
          justify-center
          bg-primary
          text-white
          border rounded-lg
          hover:bg-primary_hover"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default HeaderPage;
