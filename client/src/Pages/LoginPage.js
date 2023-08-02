import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

function LoginPage() {
  return (
    <div className="mt-20 flex-col justify-center">
      <span className="flex justify-center font-bold text-2xl mb-10">
        Login
      </span>
      <form className=" max-w-md mx-auto">
        <div className="">
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mb-3 mt-1 w-full"
            type="email"
            id="email"
            placeholder="Type your email here"
          />
          <br />
          <label htmlFor="pwd">Password</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mt-1 w-full"
            type="password"
            id="pwd"
            placeholder="Type your password here"
          />
          <br />
          <button
            className="my-5 py-2 w-full border bg-primary rounded-full"
            id="login-btn"
          >
            Login
          </button>
        </div>
      </form>
      <div className=" max-w-md mx-auto">
        Don't have an account yet?
        <br />
        <Link to="/register" className="text-primary font-medium" id="register">
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
