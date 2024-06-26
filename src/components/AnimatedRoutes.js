import React from "react";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = ({ data }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home data={data} />} />
        <Route path="/about" element={<About data={data} />} />
        <Route path="/contact" element={<Contact data={data} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
