import React from "react";

const AppButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-sm bg-indigo-500 h-[30px] w-[120px] hover:bg-indigo-400 text-white text-sm "
    >
      {children}
    </button>
  );
};

export default AppButton;
