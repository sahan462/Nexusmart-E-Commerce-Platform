import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faCalendarDays,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

export default function SellerPanel(params) {
  return (
    <div>
      {/* Seller Name, Chat  */}
      <div className="border-b border-gray-200 pb-2">
        <div>Sold By</div>
        <div className=" text-primary font-medium flex justify-between">
          <button>{params.sellerData.name}</button>
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
          <span className="ml-2">
            {params.returnData.canBeReturned
              ? `${params.returnData.returnDays} Days Returns`
              : "Return not Available for this Product"}
          </span>
        </div>
        <div className="text-sm">
          {params.returnData.canBeReturned
            ? "Change of mind is not applicable"
            : ""}
        </div>
      </div>
      {/* Warranty policy here  */}
      <div className="py-2">
        <div>
          <FontAwesomeIcon icon={faShield} />
          <span className="ml-2">
            {params.warrantyData.available
              ? `${params.warrantyData.duration} ${params.warrantyData.durationCategory} Seller Warranty`
              : `Warranty Not Available for this Product`}
          </span>
        </div>
      </div>
    </div>
  );
}
