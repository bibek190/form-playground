import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
