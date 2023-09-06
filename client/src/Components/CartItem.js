import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCirclePlus,
  faCircleMinus,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

export default function CartItem(props) {
  props = props.data;
  return (
    <div className=" mb-6 bg-white border border-none rounded-lg shadow-lg">
      <div className="p-4">
        <FontAwesomeIcon
          icon={faStore}
          className="text-gray-400 hover:text-primary mr-2"
        />
        {props.sellerName}
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-2">
          <img
            src={props.imgURL}
            alt="Item"
            className="h-40 w-40 object-cover border border-none rounded-lg"
          />
        </div>
        <div className="col-span-10  grid grid-cols-6 pt-2">
          <div className="col-span-3  px-4">{props.title}</div>
          <div className="col-span-3 grid grid-cols-6">
            <div className="col-span-3">
              <div className="text-primary font-medium text-xl mb-2">
                Rs. {props.newPrice}
              </div>
              <div className="line-through text-gray-400">
                Rs. {props.oldPrice}
              </div>
              <div className="mb-2">{props.percentage}%</div>
              <div>
                <button>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-gray-400 hover:text-primary"
                  />
                </button>
              </div>
            </div>
            <div className="col-span-3 flex items-center justify-start">
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    props.handler("m", props.itemID, props.quantity);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    className="text-gray-400 hover:text-primary h-8"
                  />
                </button>
                <span className="mx-4 text-lg font-medium">
                  {props.quantity}
                </span>
                <button
                  onClick={() => {
                    props.handler("p", props.itemID, props.quantity);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="text-gray-400 hover:text-primary h-8"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
