import { Navigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../AuthContext";
import { useContext } from "react";

export default function ProfilePage() {
  const { setUserData } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  async function signOutHandler() {
    console.log("clicked");
    setUserData(null);
    await localStorage.removeItem("userDataStorage");
    setRedirect(true);

    alert("sign out successfull");
  }
  if (redirect) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <div>
      Sign Out: <button onClick={signOutHandler}>Click Here</button>
    </div>
  );
}
