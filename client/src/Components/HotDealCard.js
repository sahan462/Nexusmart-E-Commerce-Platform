import { Link } from "react-router-dom";
export default function HotDealCard(props) {
  const uri = "/item?id=" + props.itemID;
  return (
    <Link
      to={uri}
      className=" h-20 my-4 flex border border-none rounded-md overflow-hidden  bg-gray-200 hover:bg-gray-300"
    >
      <div className="">
        <img className="h-20 w-20 object-cover" src={props.imgURL} />
      </div>
      <div className=" h-full w-full grid grid-rows-2 px-1 py-1">
        <span className="row-span-1 text-sm">{props.itemName}</span>
        <div className="row-span-1 grid grid-cols-3">
          <div className="col-span-1 text-category_lits text-sm flex items-center line-through">
            Rs.{props.oldPrice}
          </div>
          <Link
            to="/"
            className="bg-black text-white border border-none rounded-lg col-span-2 text-sm flex justify-center items-center"
          >
            Rs. {props.newPrice}
          </Link>
        </div>
      </div>
    </Link>
  );
}
