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
              className=" h-24 w-1/2 object-cover"
            />
          </div>
          <div className="font-medium flex justify-center mb-4">Follow Us</div>
          <div className="grid grid-cols-4 mx-16">
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
        <div className="col-span-3 h-full flex justify-start">
          <img src={qr} alt="QR code" className="w-40 h-40"></img>
        </div>

        <div className=" col-span-6 h-full">
          <div className="font-bold flex justify-end text-primary">
            Customer Care
          </div>
          <div className="">
            <div className="ml-2 text-gray-400 ">
              <div className="text-end text-sm pt-1">
                <Link className="hover:text-primary">How to buy</Link>
              </div>
              <div className="text-end text-sm pt-1">
                <Link className="hover:text-primary">Help Center </Link>
              </div>
              <div className="text-end text-sm pt-1">
                <Link className="hover:text-primary">Returns and Refunds</Link>
              </div>
              <div className="text-end text-sm pt-1">
                <Link className="hover:text-primary">
                  Corporate & Bulk Purchasing{" "}
                </Link>
              </div>
              <div className="text-end text-sm pt-1">
                <Link className="hover:text-primary">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-sm text-white flex justify-center items-center py-2">
        Copyright © {currentYear} NexusMart. All rights reserved.
      </div>
    </div>
  );
}
