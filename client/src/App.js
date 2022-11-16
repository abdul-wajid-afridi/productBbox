import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddPost from "./pages/AddPost";
import Cart from "./pages/Cart";
import Items from "./pages/Items";
import { calculateTotal, CartData } from "./redux/Features/CartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.ItemsSlice);
  useEffect(() => {
    // dispatch(calculateTotal());
    dispatch(CartData());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
