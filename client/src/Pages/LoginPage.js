import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isLoginBtnDisable, setIsLoginButtonDiabled] = useState(true);

  useEffect(() => {
    if (email === "" || password === "") {
      setIsLoginButtonDiabled(true);
    } else {
      setIsLoginButtonDiabled(false);
    }
  }, [email, password]);

  const { userData, setUserData } = useContext(UserContext);
  async function handleLogin(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post("/auth/login", { email, password });
      const jsonString = JSON.stringify(response.data); // local storage only allow strings
      console.log("responseeeeeeee", jsonString);
      localStorage.setItem("userDataStorage", jsonString); // store in localStorage
      setUserData(JSON.parse(jsonString)); // add into user context
      alert("Login Successful");
      setRedirect(true);
    } catch (e) {
      alert("Login Failed" + e);
    }
  }

  if (redirect) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <div className="mt-20 flex-col justify-center">
      <span className="flex justify-center font-bold text-2xl mb-10">
        Login
      </span>
      <form className=" max-w-md mx-auto" onSubmit={handleLogin}>
        <div className="">
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
            className="border rounded-full px-4 py-2 mt-1 w-full"
            type="password"
            id="pwd"
            placeholder="Type your password here"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <br />
          {/* Login Button here  */}
          <button
            type="submit"
            className={`my-5 py-2 w-full border rounded-full ${
              isLoginBtnDisable
                ? "bg-gray-400"
                : "bg-primary hover:bg-primary_hover "
            } `}
            id="login-btn"
            disabled={isLoginBtnDisable}
          >
            Login
          </button>
        </div>
      </form>
      {/* Registration Here  */}
      <div className=" max-w-md mx-auto">
        Don't have an account yet?
        <br />
        <Link
          to="/register_user"
          className="text-primary font-medium"
          id="register"
        >
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
