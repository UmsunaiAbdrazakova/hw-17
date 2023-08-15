import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
        <b>iStore</b>
      <nav>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/myCart">My Cart</NavLink>
        <NavLink to="/myOrders">My Orders</NavLink>
      </nav>
    </header>
  );
};
