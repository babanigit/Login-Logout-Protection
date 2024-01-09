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

    createUserWithEmailAndPassword(database, email, password, name).then(
      (data) => {
        console.log(data, "authData");
        history('/home')
      }
    ).catch(err=>{
      alert(err.code)
      history('/')
    })

    setEmail(" ")
    setName(" ")
    setPassword(" ")

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
    <div className="login">
      {console.log()}
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          name="Name"
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name="Password"
        />

        {/* submit function */}
        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Login;
