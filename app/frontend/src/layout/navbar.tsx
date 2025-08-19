import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Megaplex</span>
      </a>
    </div>
    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
    <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Products</Link>
  </nav>
    <Outlet />
    </>
}