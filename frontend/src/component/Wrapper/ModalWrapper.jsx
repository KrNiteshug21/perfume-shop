import React from "react";

const ModalWrapper = ({ children }) => {
  return (
    <div className="top-1/2 left-1/2 z-50 fixed flex justify-center items-center bg-black/50 p-4 w-full h-full -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white mx-auto p-6 rounded-md w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
