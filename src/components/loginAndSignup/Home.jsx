import React from "react";
import { useNavigate} from "react-router-dom";

// import firebase
import { signOut } from "firebase/auth";
import { database } from "../../FirebaseConfig";

function Home() {
  // const location = useLocation()
  const history = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const userName = localStorage.getItem(user.email);

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      history("/");
    });
  };

  return (
    <div className=" grid h-screen w-full place-items-center place-content-center gap-3 ">
      <div class="text-3xl font-bold underline grid">Hello Home!</div>

      <div className=" grid gap-2">
        <div>{userName}</div>
        <div>{user.email}</div>
        <button
          className=" border-3 border-red-900 border rounded-md bg-slate-300"
          onClick={handleClick}
        >
          Signout
        </button>
      </div>
    </div>
  );
}

export default Home;
