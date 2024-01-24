import React, { useState } from "react";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// importing firebase
import { database } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  console.log(name, email, password);

  async function submit(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(database, email, password, name)
      .then((data) => {
        console.log(data, "authData");
        history("/home");
      })
      .catch((err) => {
        alert(err.code);
        history("/");
      });

    setEmail(" ");
    setName(" ");
    setPassword(" ");

    // // try
    // try {
    //     e.preventDefault()
    //   await axios.post("http://localhost:3001/signup", {
    //       email,
    //       password,
    //       name,
    //     })

    //     // .then((res) => {
    //     //   if (res.data === "exist") {
    //     //     alert("User already exists");
    //     //   } else if (res.data === "notexist") {
    //     //     history("/home", { state: { id: email } });
    //     //   }
    //     // })
    //     .then(result => console.log(result))

    //     // .catch((e) => {
    //     //   alert("wrong details");
    //     //   console.log(e);
    //     // });
    //     .catch(err=> console.log(err))

    //     // catch
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <>
      <div className=" w-full h-screen">
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form action="POST" className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  name="Name"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  name="Email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  name="Password"
                />

                {/* submit function */}
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  type="submit"
                  onClick={submit}
                >
                  {" "}
                  signup{" "}
                </button>
              </form>
              <p>
                <span className="text-gray-600">Already have an account?</span>{" "}
                <Link to="/">Login Page</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
