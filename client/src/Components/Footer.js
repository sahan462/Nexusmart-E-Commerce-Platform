import qr from "./../assets/qrcode.png";
import logowhite from "./../assets/logowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="mt-32 ">
      <div className="bg-black text-white justify-center items-center py-6 grid grid-cols-12 gap-3 px-4">
        <div className="col-span-3 h-full">
          <div className="flex justify-center items-center ">
            <img
              src={logowhite}
              alt="logo"
              className="h-24 w-1/2 object-cover "
            />
          </div>
          <div className="font-medium flex justify-center mb-2">Follow Us</div>
          <div className="grid grid-cols-4 gap-3">
            <div className=" col-span-1 flex justify-center items-center">
              <Link to="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="h-6 w-6 hover:text-primary"
                />
              </Link>
            </div>
            <div className=" col-span-1 flex justify-center items-center">
              <Link to="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-6 w-6 hover:text-primary"
                />
              </Link>
            </div>
            <div className=" col-span-1 flex justify-center items-center">
              <Link to="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="h-6 w-6 hover:text-primary"
                />
              </Link>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <Link to="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 w-6 hover:text-primary"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full flex justify-center">
          <img src={qr} alt="QR code" className="w-40 h-40"></img>
        </div>

        <div className=" col-span-6 py-2 h-full">
          <div className="font-medium flex justify-end">Customer Care</div>
          <div className="ml-2">
            <Link className="hover:text-primary">
              <div className="text-end text-sm pt-1">Help Center</div>
            </Link>
            <Link className="hover:text-primary">
              <div className="text-end text-sm pt-1">How to buy</div>
            </Link>
            <Link className="hover:text-primary">
              <div className="text-end text-sm pt-1">Returns and Refunds</div>
            </Link>
            <Link className="hover:text-primary">
              <div className="text-end text-sm pt-1">About Us</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white flex justify-center items-center py-2">
        Copyright © {currentYear} NexusMart. All rights reserved.
      </div>
    </div>
  );
}
