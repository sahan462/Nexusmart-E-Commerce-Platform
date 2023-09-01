import ImageSlider from "../Components/ImageSlider";
import Categories from "../Components/Categories";
import Cards from "../Components/Cards";
import HotDealsList from "../Components/HotDealsList";
import ShoppingList from "../Components/ShoppingList";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import axios from "axios";

function IndexPage() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/items/");
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("API call failed:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading == true) {
    return <Loading />;
  }
  return (
    <div className="mt-3 bg-white grid grid-cols-12  gap-8">
      <div className="bg-white-400 w-full h-full col-span-2">
        <Categories />
      </div>

      <div className=" w-full h-full col-span-8">
        <ImageSlider />
        <Cards />
        <ShoppingList data={apiData} />
      </div>
      <div className=" w-full h-full col-span-2">
        <HotDealsList data={apiData} />
      </div>
    </div>
  );
}

export default IndexPage;
