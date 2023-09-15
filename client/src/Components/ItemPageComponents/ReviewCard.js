import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Reviewcard(params) {
  // No of review stars handling
  function getStars(noOfStars) {
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
    return starComponents;
  }

  return (
    <div className="my-4 bg-white shadow-2xl py-4 px-4 border border-none rounded-lg">
      <div className=" text-sm">
        <div className="bg-white flex justify-between items-center">
          <div className="py-1">{getStars(Math.floor(params.starRating))}</div>
          <div className="text-gray-500">
            {params.date.split("-").join("/")}
          </div>
        </div>
        <div className="bg-white py-1 text-gray-500">
          <FontAwesomeIcon icon={faUser} className="mr-2 h-4 w-4" />
          {params.userName}
        </div>
      </div>
      <hr />
      <div className="bg-white py-2">{params.comment}</div>
    </div>
  );
}
