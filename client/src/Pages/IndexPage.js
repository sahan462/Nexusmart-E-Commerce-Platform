import ImageSlider from "../Components/ImageSlider";
import Categories from "../Components/Categories";
function IndexPage() {
  return (
    <div className="bg-white-400 grid grid-cols-12  gap-10 h-screen">
      <div className="bg-white-400 w-full h-full col-span-2">
        <Categories />
      </div>
      <div className="bg-yellow-400 w-full h-full col-span-7"></div>
      <div className="bg-green-400 w-full h-full col-span-3"></div>
    </div>
  );
}

export default IndexPage;
