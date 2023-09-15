import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function DeliveryPanel(params) {
  // console.log(params.deliveryData);
  return (
    <div>
      <div className="bg-white mb-6 p-2 border border-none rounded-lg shadow-2xl">
        <div className="text-gray-500">Delivery Options</div>
        {/* Location Selection Here  */}
        <div className="flex items-center justify-between mt-2 pb-2">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#9e9e9e" }}
            />
            <div className="ml-2">Western, Colombo</div>
          </div>
          <button className="text-primary font-medium hover:text-primary_hover">
            Change
          </button>
        </div>
        {/* Delivery Method for selected location here  */}
        <div className="border-b border-gray-200 pb-2 my-2">
          {params.deliveryData.freeDelivery ? (
            <div className="bg-gray-300 p-2 border border-none rounded-lg text-gray-700">
              <div className="font-medium">Free Delivery</div>
              <div>
                <span>Estimated Delivery Date: </span>
                <span>{params.deliveryData.estimateDeliveryDate} </span>
              </div>
            </div>
          ) : (
            <div className="bg-gray-300 p-2 border border-none rounded-lg text-gray-700">
              <div className="flex items-center justify-between">
                <div className="font-medium">Standard Delivery</div>
                <div className="font-medium">Rs.250</div>
              </div>
              <div>
                <span>Estimated Delivery Date: </span>
                <span>{params.deliveryData.estimateDeliveryDate}</span>
              </div>
            </div>
          )}
        </div>
        {/* Cash on delivery indicator here  */}
        <div>
          {params.deliveryData.cashOnDelivery ? (
            <div className=" p-2 border border-none rounded-lg text-gray-500">
              <div className="font-medium">Cash On Delivery Available</div>
            </div>
          ) : (
            <div className=" p-2 border border-none rounded-lg text-gray-500">
              <div className="font-medium">Cash On Delivery Not Available</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
