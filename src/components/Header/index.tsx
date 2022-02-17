import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();

  return (
    <header className="py-3 flex flex__spaced flex__item-center">
      <button className="w-14 cursor-pointer" onClick={() => navigate("/")}>
        <img
          src={require("../../assets/icons/pizza-rush_1.svg").default}
          alt="pizza-rush"
        />
      </button>
      <div className="nav__links">
        <NavLink to="/" className="nav__link fs-16">
          Home
        </NavLink>
        <NavLink to="/pizzas" className="nav__link fs-16">
          {" "}
          Our Rush...
        </NavLink>
        <NavLink to="/about-us" className="nav__link fs-16">
          {" "}
          About us
        </NavLink>
        <NavLink to="/contact-us" className="nav__link fs-16">
          Contact us
        </NavLink>
      </div>
      <div className="flex flex__item-center cursor-pointer">
        <button onClick={() => navigate("/cart")} className="u-relative">
          <div className="w-3 flex mr-2 cursor-pointer">
            <img
              src={require("../../assets/icons/cart-icon.svg").default}
              alt="cart-icon"
            />
          </div>
          {cart.length ? (
            <span className="u-absolute cart__value">{cart.length}</span>
          ) : (
            ""
          )}
        </button>
        <div className="flex flex__item-center">
          <div className="w-3 flex">
            <img
              src={require("../../assets/icons/logout.svg").default}
              alt="pizza-rush"
            />
          </div>
          &nbsp;
          <span>Logout</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
