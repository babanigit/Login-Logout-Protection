import React, { useState } from "react";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// importing firebase
import { database } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// import wallpaper2 from './images/wallpaper2.jpg';

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(name, email, password);
  // console.log(auth?.currentUser?.email)

  async function submit(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        database,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      console.log(user.accessToken);

      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      history("/home");
    } catch (error) {
      console.log("invalid details");
      console.error(error);
    }

    //  .then(
    //       (data) => {
    //         console.log(data, "authData");
    //         history('/home')
    //       }
    //     ).catch(err=>{
    //       alert(err.code)

    //       setError(error.message)

    //     })

    // try {
    //     await axios
    //         .post("http://localhost:8000/", {
    //             email, password
    //         })
    //         .then((res) => {
    //             if (res.data === "exist") {
    //                 history("/home", { state: { id: email } });
    //             } else if (res.data === "notexist") {
    //                 alert("User have not sign up");
    //             }
    //         })
    //         .catch((e) => {
    //             alert("wrong details");
    //             console.log(e);
    //         });
    // } catch (e) {
    //     console.log(e);
    // }
  }

  return (
    <>
      {/* <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password"
                />
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
        </div> */}

      <div className="w-full h-screen">
        {/* <img 
        className='hidden sm:block absolute w-full h-full object-cover bg-white'
        // src={wallpaper2}
        alt='/'
      /> */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen text-red-50 flex justify-center">
          {" "}
        </div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>

              {/* Error */}
              <form onSubmit={submit} className="w-full flex flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p className="text-gray-400">Need Help?</p>
                </div>
                <p className="py-4 mt-8">
                  <span className="text-gray-600">New to website?</span>{" "}
                  <Link to="/Signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
