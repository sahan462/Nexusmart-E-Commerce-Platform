import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BuyerRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");

  // register button handling here
  const [isButtonDisabled, setIsButtonDiabled] = useState(false);

  useEffect(() => {
    if (email === "" || name === "" || pwd === "" || pwd !== pwdConfirm) {
      setIsButtonDiabled(true);
    } else {
      setIsButtonDiabled(false);
    }
  }, [name, email, pwd, pwdConfirm]);

  // submission handling here
  async function handleBuyerRegistration(ev) {
    ev.preventDefault();
    try {
      // TODO: change the path correctly
      await axios.post("/auth/register_buyer", {
        name,
        email,
        pwd,
      });
      alert("Registration Succefull");
    } catch (e) {
      alert("registration Failed" + e);
    }
  }

  return (
    <div className="mt-10 flex flex-col justify-center">
      <span className="flex justify-center font-bold text-2xl mb-10">
        Register
      </span>
      {/* REgistration From here  */}
      <form className=" w-1/3 mx-auto" onSubmit={handleBuyerRegistration}>
        <div className="">
          {/* Name here  */}
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mb-3 mt-1 w-full"
            type="name"
            id="name"
            placeholder="Type your name here"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <br />
          {/* Email here  */}
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mb-3 mt-1 w-full"
            type="email"
            id="email"
            placeholder="Type your email here"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <br />
          {/* Pwd here  */}
          <label htmlFor="pwd">Password</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mb-3 mt-1 w-full"
            type="password"
            id="pwd"
            placeholder="Type your password here"
            value={pwd}
            onChange={(ev) => setPwd(ev.target.value)}
          />
          <br />
          {/* Pwd confirmation here  */}
          <label htmlFor="pwd-2">Confirm Password</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mt-1 w-full"
            type="password"
            id="pwd-2"
            placeholder="Type your password here"
            onChange={(ev) => setPwdConfirm(ev.target.value)}
            value={pwdConfirm}
          />
          <br />
          {/* Register Button here  */}
          <button
            type="submit"
            className={`my-5 py-2 w-full border rounded-full ${
              isButtonDisabled
                ? "bg-gray-400"
                : "bg-primary hover:bg-primary_hover"
            } text-white`}
            disabled={isButtonDisabled}
          >
            Register
          </button>
        </div>
      </form>
      {/* Seller Registration btn here  */}
      <div className="w-1/3 mx-auto">
        <Link to="/register_seller">
          <button
            className="mb-5 py-2 w-full border border-primary text-primary rounded-full"
            id="seller-register-btn"
          >
            Are you a Seller?
          </button>
        </Link>
      </div>
      {/* Login btn here  */}
      <div className=" max-w-md mx-auto">
        Already have an account?
        <Link to="/login" className="text-primary font-medium">
          <span>&#160; Login</span>
        </Link>
      </div>
    </div>
  );
}
