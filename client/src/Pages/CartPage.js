import { useContext } from "react";
import { UserContext } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "../Components/Alert";
import CartItem from "../Components/CartItem";

export default function CartPage() {
  const [showContent, setShowContent] = useState(false);

  const { userData } = useContext(UserContext);
  console.log(userData);
  if (userData === null) {
    const delay = 1000;

    setTimeout(() => {
      setShowContent(true);
    }, delay);

    return (
      <div>
        <Alert msg="You should have logged in first !" where="Login Page" />
        {showContent && <Navigate to={"/login"}></Navigate>}
      </div>
    );
  }
  return (
    <div className="bg-yellow-300">
      Cart here
      <CartItem />
    </div>
  );
}
