import ShoppingCard from "./ShoppingCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShoppingList() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/items/");
        setApiData(response.data);
      } catch (error) {
        console.log("API call failed:", error);
      }
    }
    fetchData();
  }, [apiData]);

  return (
    <div className="h-screen  w-full grid grid-cols-12 gap-6">
      {apiData.map((card) => (
        <div className="col-span-3">
          <ShoppingCard
            title={card.title}
            imgURL={card.imgURL}
            noOfStars={card.noOfStars}
            newPrice={card.discount ? card.discount.newPrice : card.price}
            oldPrice={card.price}
            percentage={card.discount ? card.discount.percentage : 0}
          />
        </div>
      ))}
    </div>
  );
}
