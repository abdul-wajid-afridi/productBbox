import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppWaring = ({ children, to, title }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 ">
      <Link to={to} className="flex gap-2 items-center">
        <span>
          <FaArrowAltCircleLeft />
        </span>
        {title}
      </Link>
      <p className="text-3xl font-bold text-red-400 animate-bounce">
        {children}
      </p>
    </div>
  );
};

export default AppWaring;
