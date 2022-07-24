import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Mens from "../Pages/Mens";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductDetails from "../Pages/ProductDetails";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mens/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
