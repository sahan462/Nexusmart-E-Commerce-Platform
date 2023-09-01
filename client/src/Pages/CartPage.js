import { useContext } from "react";
import { UserContext } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "../Components/Alert";
import CartItem from "../Components/CartItem";
import OrderSummery from "../Components/OrderSummery";

export default function CartPage() {
  const [showContent, setShowContent] = useState(false);

  const { userData } = useContext(UserContext);
  console.log(userData);
  if (userData === null) {
    const delay = 1500;

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
    <div className="py-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          {/* Cart Items here  */}
          <CartItem />
          <CartItem />
        </div>
        <div className="col-span-4">
          {/* Shipping Details  */}
          <OrderSummery />
        </div>
      </div>
    </div>
  );
}
