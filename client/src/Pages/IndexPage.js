import ImageSlider from "../Components/ImageSlider";
import Categories from "../Components/Categories";
import Cards from "../Components/Cards";
function IndexPage() {
  return (
    <div className="mt-3 bg-white-400 grid grid-cols-12  gap-12 h-screen">
      <div className="bg-white-400 w-full h-full col-span-2">
        <Categories />
      </div>
      <div className=" w-full h-full col-span-8">
        <ImageSlider />
        <Cards />
        <p>Shopping items display here ............</p>
      </div>
      <div className="bg-green-400 w-full h-full col-span-2"></div>
    </div>
  );
}

export default IndexPage;
