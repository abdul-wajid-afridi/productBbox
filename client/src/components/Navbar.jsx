import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./styles/navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.CartSlice);

  return (
    <section className="navbar">
      <div className="navbar__menu">
        <Link to="/" className="navbar__items">
          Items
        </Link>
        <Link to="/add-post" className="navbar__items">
          Add Post
        </Link>
      </div>
      <div className="navbar__cart">
        <Link to="/cart" className="navbar__items">
          cart
          <FaCartPlus />
          <span>{cartItems?.length}</span>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
