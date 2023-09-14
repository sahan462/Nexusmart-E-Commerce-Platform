import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Reviewcard() {
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
    <div className="my-4 bg-white shadow-2xl py-2 px-2 border border-none rounded-lg">
      <div className="py-2 text-sm">
        <div className="bg-white flex justify-between items-center">
          <div>{getStars(3)}</div>
          <div>01 June 2022</div>
        </div>
        <div className="bg-white py-1">Vishwa Sandaruwan</div>
      </div>
      <hr />
      <div className="bg-white py-2">Sa WOW</div>
    </div>
  );
}
