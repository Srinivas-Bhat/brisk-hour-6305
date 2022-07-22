import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Mens from "../Pages/Mens";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/:id" element={<Mens />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
