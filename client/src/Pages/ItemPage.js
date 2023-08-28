import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationDot,
  faComments,
  faCalendarDays,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Components/Loading";

export default function ItemPage() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchInput = searchParams.get("id");

  useEffect(() => {
    async function fetchData() {
      try {
        const uri = "/items?id=" + searchInput;
        const response = await axios.get(uri);
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("API call failed:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [searchInput]);

  if (loading) {
    return <Loading />;
  }

  console.log(apiData);

  const noOfStars = apiData.noOfStars;
  const starComponents = [];
  for (let i = 0; i < noOfStars; i++) {
    starComponents.push(
      <FontAwesomeIcon
        className="h-3 w-3"
        icon={faStar}
        style={{ color: "#4287f5" }}
      />
    );
  }
  for (let i = 0; i < 5 - noOfStars; i++) {
    starComponents.push(
      <FontAwesomeIcon
        className="h-3 w-3"
        icon={faStar}
        style={{ color: "#a6a9ad" }}
      />
    );
  }

  const colors = {
    red: "#ff0000",
    green: "#00ff00",
  };

  const isFreeDeliveryAvailable = true;
  const isCODAvailable = true;

  return (
    <div className=" py-4 h-full">
      {/* Images, prices, seller informations here  */}
      <div className=" grid grid-cols-12 h-[calc(100vh-7rem)] gap-3">
        {/* Images here  */}
        <div className="col-span-4 h-full">
          {/* Selected Image Here */}
          <div className="bg-white p-2 flex items-center justify-center border border-none rounded-lg shadow-2xl">
            <img
              alt="item"
              className="h-96 w-full object-cover border border-none rounded-lg"
              src={apiData.imgURL}
            />
          </div>
          {/* Other Images here */}
          <div className="mt-5 px-2 h-24 grid grid-cols-12 gap-4">
            <img
              alt="item"
              className="shadow-lg h-full w-full object-cover border-2 border-primary   rounded-lg col-span-3"
              src={apiData.imgURL}
            />
            <img
              alt="item"
              className="shadow-lg h-full w-full object-cover border-2 border-gray-500  rounded-lg col-span-3"
              src={apiData.imgURL}
            />
            <img
              alt="item"
              className="shadow-lg h-full w-full object-cover border-2 border-gray-500  rounded-lg col-span-3"
              src={apiData.imgURL}
            />
            <img
              alt="item"
              className="shadow-lg h-full w-full object-cover border-2 border-gray-500  rounded-lg col-span-3"
              src={apiData.imgURL}
            />
          </div>
        </div>
        {/* Item price and relevent details here  */}
        <div className="col-span-4 h-full  px-2">
          {/* Item name category reviews here  */}
          <div className="bg-white mb-6 row-span-1 grid grid-rows-5 p-2 border border-none rounded-lg shadow-2xl">
            <div className="text-sm text-gray-500 row-span-1">
              Main Category {">"} Sub Category
            </div>
            <div className="text-lg font-semibold row-span-2 flex items-center">
              {apiData.title}
            </div>
            <div className="flex items-center row-span-1">
              <span className="flex items-center ">{starComponents}</span>
              <span className="flex items-center ml-2 text-sm text-gray-500">
                {"( 00 Reviews )"}
              </span>
            </div>
            <div className="text-sm flex items-center row-span-1 text-gray-500">
              Brand:
              <span className=" ml-2 flex items-center">{"Brand Name"}</span>
            </div>
          </div>
          {/* Item price, discount, colors, quantity here  */}
          <div className="bg-white mb-6 row-span-4 p-2 border border-none rounded-lg shadow-2xl">
            {/* Price here  */}
            <div className="font-semibold text-primary text-3xl">{`Rs. ${
              apiData.discount ? apiData.discount.newPrice : apiData.price
            }`}</div>
            {/* discount details here  */}
            <div className="text-gray-500">
              <span className="mr-1 line-through">{`Rs. ${apiData.price}`}</span>
              <span>{`-${
                apiData.discount ? apiData.discount.percentage : "0"
              }%`}</span>
            </div>
            {/* Colors here  */}
            <div className="my-4">
              <div className="flex items-center">
                <span className="mr-1 text-gray-500">Color Family:</span>
                <span
                  className={`${
                    selectedColor ? "text-black" : "text-gray-500"
                  }`}
                >
                  {selectedColor ? selectedColor : "Please select a color"}
                </span>
              </div>
              <div className="my-2 flex items-center">
                <button
                  className={`h-7 w-7 mr-2 border-2 border-red-500 rounded-full ${
                    selectedColor === "red" ? "bg-red-500" : "bg-white"
                  }`}
                  onClick={() => {
                    setSelectedColor("red");
                  }}
                ></button>
                <button
                  className={`h-7 w-7 mr-2  border-2 border-green-500 rounded-full ${
                    selectedColor === "green" ? "bg-green-500" : "bg-white"
                  }`}
                  onClick={() => {
                    setSelectedColor("green");
                  }}
                ></button>
              </div>
            </div>
            {/* Quantity Here */}
            <div className="my-2 flex items-center">
              <span className="text-gray-500">Quantity: </span>
              <button
                className="bg-gray-200 h-7 w-7 mx-2 border border-none rounded-full font-medium flex item-center justify-center hover:bg-gray-300"
                onClick={() => {
                  selectedQuantity === 1
                    ? setSelectedQuantity(1)
                    : setSelectedQuantity(selectedQuantity - 1);
                }}
              >
                -
              </button>
              <span className="text-black">{selectedQuantity}</span>
              <button
                className="bg-gray-300 h-7 w-7 mx-2 border border-none rounded-full font-medium flex item-center justify-center hover:bg-gray-400"
                onClick={() => {
                  setSelectedQuantity(selectedQuantity + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          {/* Buy add to cart Here  */}
          <div className="bg-white mb-6  row-span-1 p-2 border border-none rounded-lg shadow-2xl grid grid-cols-6 gap-3">
            <button className="bg-primary hover:bg-primary_hover font-semibold text-white col-span-3 h-12 border border-none rounded-lg">
              Buy Now
            </button>
            <button className="bg-addToCart hover:bg-addToCartHover font-semibold text-white col-span-3 h-12 border border-none rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
        {/* Shipping methods and seller informations here  */}
        <div className="col-span-4 h-full px-2 ">
          {/* Delivery Details Here  */}
          <div className="bg-white mb-6 p-2 border border-none rounded-lg shadow-2xl">
            <div className="text-gray-500">Delivery Options</div>
            {/* Location Selection Here  */}
            <div className="flex items-center justify-between mt-2 pb-2">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#9e9e9e" }}
                />
                <div className="ml-2">
                  Western, Colombo 1-15, Colombo 01 - Fort
                </div>
              </div>
              <button className="text-primary font-medium hover:text-primary_hover">
                Change
              </button>
            </div>
            {/* Delivery Method for selected location here  */}
            <div className="border-b border-gray-200 pb-2 my-2">
              {isFreeDeliveryAvailable ? (
                <div className="bg-gray-300 p-2 border border-none rounded-lg text-gray-700">
                  <div className="font-medium">Free Delivery</div>
                  <div>
                    <span>Estimated Delivery Date: </span>
                    <span>27 Aug - 31 Aug</span>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-300 p-2 border border-none rounded-lg text-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Standard Delivery</div>
                    <div className="font-medium">Rs.250</div>
                  </div>
                  <div>
                    <span>Estimated Delivery Date: </span>
                    <span>27 Aug - 31 Aug</span>
                  </div>
                </div>
              )}
            </div>
            {/* Cash on delivery indicator here  */}
            <div>
              {isCODAvailable ? (
                <div className=" p-2 border border-none rounded-lg text-gray-500">
                  <div className="font-medium">Cash On Delivery Available</div>
                </div>
              ) : (
                <div className=" p-2 border border-none rounded-lg text-gray-500">
                  <div className="font-medium">
                    Cash On Delivery Not Available
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Seller Details Here  */}
          <div className="bg-white mb-6 p-2 border border-none rounded-lg shadow-2xl text-gray-500">
            {/* Seller Name, Chat  */}
            <div className="border-b border-gray-200 pb-2">
              <div>Sold By</div>
              <div className=" text-primary font-medium flex justify-between">
                <button>{apiData.seller.name}</button>
                <button>
                  <div className="flex items-center">
                    <span className="flex items-center mr-4 hover:text-primary_hover">
                      Chat with Seller
                    </span>
                    <FontAwesomeIcon
                      className="h-5 w-5"
                      icon={faComments}
                      style={{ color: "#127dff" }}
                    />
                  </div>
                </button>
              </div>
            </div>
            {/* Return Policy here  */}
            <div className="border-b border-gray-200 pb-2">
              <div>
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="ml-2">7 Days Returns</span>
              </div>
              <div className="text-sm">Change of mind is not applicable</div>
            </div>
            {/* Warranty policy here  */}
            <div className="py-2">
              <div>
                <FontAwesomeIcon icon={faShield} />
                <span className="ml-2">6 Months Seller Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Item description here  */}
      <div className="bg-green-400 py-10">Item Description here</div>
      {/* Item reviews here  */}
      <div className="bg-yellow-400 py-10">
        <span className="">Item Review Here</span>
      </div>
    </div>
  );
}
