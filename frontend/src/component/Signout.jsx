import React from "react";

const Signout = () => {
  const handleSignout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <button
      className="block hover:bg-teal-700 p-2 rounded-md text-left"
      onClick={handleSignout}
    >
      Signout
    </button>
  );
};

export default Signout;
