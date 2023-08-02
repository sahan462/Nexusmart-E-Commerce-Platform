import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="mt-20 flex-col justify-center">
      <span className="flex justify-center font-bold text-2xl mb-10">
        Register
      </span>
      <form className=" max-w-md mx-auto">
        <div className="">
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mb-3 mt-1 w-full"
            type="name"
            id="name"
            placeholder="Type your name here"
          />
          <br />
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
            className="border rounded-full px-4 py-2 mb-3 mt-1 w-full"
            type="password"
            id="pwd"
            placeholder="Type your password here"
          />
          <br />
          <label htmlFor="pwd-2">Confirm Password</label>
          <br />
          <input
            className="border rounded-full px-4 py-2 mt-1 w-full"
            type="password"
            id="pwd-2"
            placeholder="Type your password here"
          />
          <br />
          <button
            className="my-5 py-2 w-full border bg-primary rounded-full"
            id="login-btn"
          >
            Register
          </button>
        </div>
      </form>
      <div className=" max-w-md mx-auto">
        Already have an account?
        <br />
        <Link to="/login" className="text-primary font-medium">
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
