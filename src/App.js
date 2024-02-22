// this is where darkTheme and lightTheme will come

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/loginAndSignup/Login";
import Signup from "./components/loginAndSignup/Signup";
import Home from "./components/loginAndSignup/Home";
import Protection from "./components/loginAndSignup/Protection";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Protection />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/about" element={<Protection />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
