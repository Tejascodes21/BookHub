import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ConatctPage from "./pages/ConatctPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/contact" element={<ConatctPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
