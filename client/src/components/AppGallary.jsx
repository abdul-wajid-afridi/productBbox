import React from "react";

const AppGallary = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 my-10">
      {children}
    </div>
  );
};

export default AppGallary;
