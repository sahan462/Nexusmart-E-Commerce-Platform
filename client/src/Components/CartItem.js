import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCirclePlus,
  faCircleMinus,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

export default function CartItem(props) {
  return (
    <div className=" mb-6 bg-white border border-none rounded-lg shadow-lg">
      <div className="p-4">
        <FontAwesomeIcon
          icon={faStore}
          className="text-gray-400 hover:text-primary mr-2"
        />
        Sahan and Sons (pvt) LTD.
      </div>
      <div className=" grid grid-cols-12">
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt="Item"
            className="h-40 w-40 object-cover border border-none rounded-lg"
          />
        </div>
        <div className="col-span-10  grid grid-cols-6 pt-2">
          <div className="col-span-3  px-4">
            Smart Watch T900 Ultra 49mm Big 2.09 inch 2023 Smart watch Series 8
            Reloj inteligence Heart rate BT
          </div>
          <div className="col-span-3 grid grid-cols-6">
            <div className="col-span-3">
              <div className="text-primary font-medium text-xl mb-2">
                Rs. 4333
              </div>
              <div className="line-through text-gray-400">Rs. 9600</div>
              <div className="mb-2">-70%</div>
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
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  className="text-gray-400 hover:text-primary h-8"
                />
                <span className="mx-4 text-lg font-medium">2</span>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-gray-400 hover:text-primary h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
