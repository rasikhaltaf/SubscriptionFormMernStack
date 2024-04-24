import React from "react";
import { Route, Routes } from "react-router-dom";
import Subscription from "./components/Subscription";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      {/* <h1>Subscription Form</h1> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Subscription />}></Route>
      </Routes>
    </>
  );
};

export default App;
