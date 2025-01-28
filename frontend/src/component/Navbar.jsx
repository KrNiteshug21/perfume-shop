import { AlignRight, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const navData = [
  { name: "Collection", path: "#" },
  // { name: "About", path: "#" },
  { name: "Contact", path: "#" },
  { name: "Cart", path: "#" },
];

const Account = ({ token }) => {
  const handleSignout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      {token ? (
        <button
          className="block hover:bg-teal-700 p-2 rounded-md text-left"
          onClick={handleSignout}
        >
          Signout
        </button>
      ) : (
        <Link
          className="block hover:bg-teal-700 p-2 rounded-md text-left"
          to={"/login"}
        >
          Login
        </Link>
      )}
    </>
  );
};

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 z-10 sticky bg-gradient-to-r from-teal-600 to-teal-800 p-2 text-lg text-white">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div>
          <Link className="font-semibold text-xl tracking-wider" to={"/"}>
            Perfume Haven
          </Link>
        </div>

        <div className="sm:flex items-center gap-2 hidden">
          {navData.map((item) => (
            <Link
              className="hover:bg-teal-700 px-3 py-1 rounded"
              key={item.name}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
          <Account token={token} />
        </div>

        <div className="block sm:hidden">
          <button onClick={handleToggle}>
            <AlignRight />
          </button>

          {isOpen && (
            <div className="top-12 right-2 z-20 absolute bg-teal-600 shadow-lg p-4 rounded-md w-52 text-white/80">
              <button className="" onClick={handleToggle}>
                <X />
              </button>
              {navData.map((item) => (
                <Link
                  className="block hover:bg-teal-700 p-2 rounded-md text-left"
                  key={item.name}
                  to={item.path}
                >
                  {item.name}
                </Link>
              ))}
              <Account token={token} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
