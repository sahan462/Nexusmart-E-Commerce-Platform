import { Link } from "react-router-dom";
export default function HotDealCard(props) {
  return (
    <Link
      to="/"
      className=" h-20 my-4 flex border border-none rounded-md overflow-hidden bg-gray-200 hover:bg-gray-300"
    >
      <div className="">
        <img className="h-20 w-20 object-cover" src={props.imgURL} />
      </div>
      <div className=" h-full w-full grid grid-rows-3 px-1 py-1">
        <span className="row-span-1 text-sm">{props.itemName}</span>
        <div className="row-span-1 text-xs flex items-center">
          {props.itemDesc}
        </div>
        <div className="row-span-1 grid grid-cols-2">
          <div className="col-span-1 text-category_lits text-sm flex items-center line-through">
            {props.oldPrice}
          </div>
          <Link
            to="/"
            className="bg-black text-white border border-none rounded-full col-span-1 text-sm flex justify-center items-center"
          >
            {props.newPrice}
          </Link>
        </div>
      </div>
    </Link>
  );
}
