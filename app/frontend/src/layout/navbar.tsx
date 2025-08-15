import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Outlet />
  </nav>
}