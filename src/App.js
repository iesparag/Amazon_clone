import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* {" "} */}
          Home Page
        </Route>
        <Route path="/login" element={<Login />}>
          {/* {" "} */}
          Login Page
        </Route>
        <Route path="/checkout" element={<Checkout />}>
          {/* {" "} */}
          Checkout Page
        </Route>
      </Routes>
    </div>
  );
}

export default App;
