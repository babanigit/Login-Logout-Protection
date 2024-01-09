// this is where darkTheme and lightTheme will come

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginAndSignup/Login";
import Signup from "./components/loginAndSignup/Signup";
import Home from "./components/loginAndSignup/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/signup"  element={<Signup />} />
          <Route path="/home"  element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
