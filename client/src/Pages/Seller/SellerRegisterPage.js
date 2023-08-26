import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
function SellerRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [isRegisterBtnDisable, setiIsRegisterBtnDisable] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
      password !== pwdConfirm
    ) {
      setiIsRegisterBtnDisable(true);
    } else {
      setiIsRegisterBtnDisable(false);
    }
  }, [name, email, password, pwdConfirm, street, city, state, zip]);

  // submission handling here
  async function handleSellerRegistration(ev) {
    ev.preventDefault();
    try {
      // TODO: change the path correctly - done
      await axios.post("/auth/register_seller", {
        name,
        email,
        password,
        street,
        city,
        state,
        zip,
      });
      alert("Registration Successfull");
      setRedirect(true);
    } catch (e) {
      alert("registration Failed" + e);
    }
  }

  if (redirect) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <div className="mt-10 flex-col justify-center">
      <span className="flex justify-center font-bold text-2xl mb-10">
        Seller Registration
      </span>
      <form className=" w-2/3 mx-auto" onSubmit={handleSellerRegistration}>
        <div className=" grid grid-cols-12 gap-4">
          {/* Name here  */}
          <div className="col-span-6">
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="name"
              id="name"
              placeholder="Type your company's name here"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <br />
          </div>
          {/* Email here  */}
          <div className="col-span-6">
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="email"
              id="email"
              placeholder="Type your company's email here"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <br />
          </div>
          {/* Street here  */}
          <div className="col-span-3">
            <label htmlFor="street">Street</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="text"
              id="street"
              placeholder="ex: s13th Lane"
              value={street}
              onChange={(ev) => setStreet(ev.target.value)}
            />
            <br />
          </div>
          {/* City here  */}
          <div className="col-span-3">
            <label htmlFor="city">City</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="text"
              id="city"
              placeholder="ex: Nugegoda"
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
            />
            <br />
          </div>
          {/* Satte here  */}
          <div className="col-span-3">
            <label htmlFor="state">State</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="text"
              id="state"
              placeholder="ex: Western"
              value={state}
              onChange={(ev) => setState(ev.target.value)}
            />
            <br />
          </div>
          {/* Zip here  */}
          <div className="col-span-3">
            <label htmlFor="zip">Zip Code</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="text"
              id="zip"
              placeholder="ex: 12400"
              value={zip}
              onChange={(ev) => setZip(ev.target.value)}
            />
            <br />
          </div>
          {/* Password here  */}
          <div className="col-span-6">
            <label htmlFor="pwd">Password</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mb-3 mt-1 w-full"
              type="password"
              id="pwd"
              placeholder="Type your password here"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <br />
          </div>
          {/* confirm PAsswword Here  */}
          <div className="col-span-6">
            <label htmlFor="pwd-2">Confirm Password</label>
            <br />
            <input
              className="border border-gray-400 rounded-full px-4 py-2 mt-1 w-full"
              type="password"
              id="pwd-2"
              placeholder="Type your password again"
              value={pwdConfirm}
              onChange={(ev) => setPwdConfirm(ev.target.value)}
            />
            <br />
          </div>
          {/* Register Button here */}
          <div className="col-span-12">
            <button
              type="submit"
              className={`my-5 py-2 w-full border text-white rounded-full ${
                isRegisterBtnDisable
                  ? "bg-gray-400"
                  : "bg-primary hover:bg-primary_hover "
              } `}
              id="user-register-btn"
              disabled={isRegisterBtnDisable}
            >
              Register Company
            </button>
          </div>
        </div>
      </form>
      <div className="w-full flex justify-center">
        Already have an account?
        <Link to="/login" className="text-primary font-medium">
          <span>&#160; Login</span>
        </Link>
      </div>
    </div>
  );
}

export default SellerRegisterPage;
