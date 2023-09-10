import { useContext } from "react";
import { UserContext } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "../Components/Alert";
import CartItem from "../Components/CartItem";
import OrderSummery from "../Components/OrderSummery";
import axios from "axios";
import Loading from "../Components/Loading";

export default function CartPage() {
  // console.log("renderd");
  const [showContent, setShowContent] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext);
  const [invalidToken, setInvalidToken] = useState(false);
  let buyerID = null;

  useEffect(() => {
    if (userData === null) {
      // user did't logged in
      const delay = 500;
      setTimeout(() => {
        setShowContent(true);
      }, delay);
    } else {
      // user have logged in
      const token = userData.token;
      const headers = {
        "x-auth-token": token,
      };
      async function fetchData() {
        try {
          const uri = "/cart";
          const response = await axios.get(uri, { headers });
          setApiData(response.data);
          setLoading(false);
        } catch (error) {
          console.log("API call failed:", error);
          setLoading(false);
          setInvalidToken(true);
        }
      }
      fetchData();
    }
  }, [userData]);

  if (invalidToken) {
    return <Navigate to={"/login"} />;
  }

  if (showContent && userData === null) {
    return (
      <div>
        <Alert msg="You should have logged in first !" where="Login Page" />
        <Navigate to={"/login"}></Navigate>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  // Quantity Change Handler
  async function quantityHandler(op, iID, q) {
    if (op === "m" && q == 1) {
    } else {
      setLoading(true);
      const token = userData.token;
      const headers = {
        "x-auth-token": token,
      };
      // console.log(op, buyerID, iID, q, "clicked");
      try {
        const uri = "/cart";
        await axios.put(
          uri,
          {
            buyerId: buyerID,
            itemId: iID,
            quantity: op === "p" ? q + 1 : q - 1,
          },
          { headers }
        );
        const response = await axios.get(uri, { headers });
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("API call failed:", error);
        // <Navigate to={"/login"}></Navigate>;
        setLoading(false);
      }
    }
  }

  // Item data restructuring
  // console.log(apiData);

  buyerID = apiData.buyerId;
  let itemsData = apiData.items;
  itemsData = itemsData.map((ele) => ({
    sellerID: ele.item.seller._id,
    itemID: ele.item._id,
    imgURL: ele.item.imgURL,
    sellerName: ele.item.seller.name,
    title: ele.item.title,
    quantity: ele.quantity,
    oldPrice: ele.item.price,
    percentage: ele.item.discount ? ele.item.discount.percentage : "0",
    newPrice: ele.item.discount ? ele.item.price : ele.item.price,
    handler: quantityHandler,
  }));

  // Update
  let total = 0;
  let subTotal = 0;
  let noOfItems = itemsData.length;
  for (const item of itemsData) {
    const itemPrice = item.quantity * item.newPrice;
    total += itemPrice;
  }
  subTotal = total;

  return (
    <div className="py-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          {/* Cart Items here  */}
          {itemsData.map((item, index) => (
            <CartItem key={index} data={item} />
          ))}
        </div>
        <div className="col-span-4">
          {/* Shipping Details  */}
          <OrderSummery
            total={total}
            subTotal={subTotal}
            noOfItems={noOfItems}
          />
        </div>
      </div>
    </div>
  );
}
