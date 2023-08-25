import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ShoppingCard(props) {
  const noOfStars = props.noOfStars;
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
  return (
    <Link to="/">
      <div className="bg-gray-200 h-64 w-full border border-none rounded-xl overflow-hidden hover:shadow-xl hover:bg-gray-300 ">
        <div className=" h-32 w-full">
          <img className="object-cover h-full w-full" src={props.imgURL} />
        </div>
        <div className=" h-32 grid grid-rows-6 px-2 py-2">
          <div className=" w-full row-span-2 font-medium flex items-center">
            {props.title}
          </div>
          <div className=" w-full row-span-3 grid grid-rows-3">
            <div className=" flex flex-col justify-center w-full font-bold text-primary text-lg row-span-2">
              Rs. {props.newPrice}
            </div>
            <div className=" w-full text-sm row-span-1">
              <span className="line-through text-category_lits">
                Rs. {props.oldPrice}
              </span>
              <span className="ml-2">-{props.percentage}%</span>
            </div>
          </div>
          <div className=" w-full row-span-1 text-sm">{starComponents}</div>
        </div>
      </div>
    </Link>
  );
}
