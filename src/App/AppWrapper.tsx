import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";

const AppWrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
    </Routes>
  </BrowserRouter>
);

export default AppWrapper;
