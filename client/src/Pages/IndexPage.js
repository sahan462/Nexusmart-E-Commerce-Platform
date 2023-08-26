import ImageSlider from "../Components/ImageSlider";
import Categories from "../Components/Categories";
import Cards from "../Components/Cards";
import HotDealsList from "../Components/HotDealsList";
import ShoppingList from "../Components/ShoppingList";
function IndexPage() {
  return (
    <div className="mt-3 bg-white-400 grid grid-cols-12  gap-8 h-full">
      <div className="bg-white-400 w-full h-full col-span-2">
        <Categories />
      </div>
      <div className=" w-full h-full col-span-8">
        <ImageSlider />
        <Cards />
        <ShoppingList />
      </div>
      <div className=" w-full h-full col-span-2">
        <HotDealsList />
      </div>
    </div>
  );
}

export default IndexPage;
