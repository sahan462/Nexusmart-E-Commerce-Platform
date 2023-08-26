import Categories from "../Components/Categories";
import HotDealsList from "../Components/HotDealsList";
import ShoppingCard from "../Components/ShoppingCard";
import ShoppingList from "../Components/ShoppingList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function RenderSearchItems(params) {
  return (
    <div className="h-screen  w-full grid grid-cols-12 gap-6">
      {params.apiData.map((card) => (
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

export function ItemNotFound(params) {
  return (
    <div className=" mt-10">
      <div className="flex justify-center font-semibold text-xl mb-3">
        No Search Result !
      </div>
      <div className="flex justify-center mb-3">
        We're sorry. We cannot find any matches for your search term.
      </div>
      <div className="flex justify-center">
        <img
          className="object-cover w-64 h-64"
          src="https://i.ibb.co/1Z3PfYQ/404-not-found.png"
          alt="Not found"
        ></img>
      </div>
    </div>
  );
}

function ShoppingIndexPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchInput = searchParams.get("q");

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const uri = "/items?name=" + searchInput;
        const response = await axios.get(uri);
        setApiData(response.data);
      } catch (error) {
        console.log("API call failed:", error);
      }
    }
    fetchData();
  }, [searchInput]);

  return (
    <div className="mt-3 bg-white-400 grid grid-cols-12  gap-8 h-full">
      <div className="bg-white-400 w-full h-full col-span-2">
        <Categories />
      </div>
      <div className=" w-full h-full col-span-8">
        {searchInput ? (
          apiData.length === 0 ? (
            <ItemNotFound />
          ) : (
            <RenderSearchItems apiData={apiData} />
          )
        ) : (
          <ShoppingList />
        )}
      </div>
      <div className=" w-full h-full col-span-2">
        <HotDealsList />
      </div>
    </div>
  );
}

export default ShoppingIndexPage;
