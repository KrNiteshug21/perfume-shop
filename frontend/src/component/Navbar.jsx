import React from "react";
import { Link } from "react-router";

const navData = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "#" },
];

const Navbar = () => {
  return (
    <nav className="top-0 z-10 sticky bg-gradient-to-r from-teal-600 to-teal-800 p-2 text-lg text-white">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div>
          <Link className="font-semibold text-xl tracking-wider" to={"/"}>
            Perfume Haven
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {navData.map((item) => (
            <Link
              className="hover:bg-teal-700 px-3 py-1 rounded"
              key={item.path}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
