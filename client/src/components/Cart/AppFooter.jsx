import React from "react";

const AppFooter = ({ total, onClick, handleCheckOut }) => {
  return (
    <footer className="my-10">
      <section className="flex justify-between items-center px-20 h-20">
        <div>
          <p className="font-bold tracking-wide text-gray-700">total:</p>
        </div>
        <div>
          <p className="font-bold tracking-wide text-gray-700">${total}</p>
        </div>
      </section>
      <div className="flex justify-center gap-4">
        <button
          onClick={onClick}
          className="border-2  border-red-800 bg-gray-100 hover:bg-blue-600 hover:text-white h-[38px] w-[180px] text-gray-800 font-bold tracking-wide"
        >
          Clear-Cart
        </button>
        <button
          onClick={handleCheckOut}
          className="border-2  border-white hover:border-blue-500 hover:bg-gray-100 bg-blue-600 text-white h-[38px] w-[180px] hover:text-gray-800 font-bold tracking-wide"
        >
          Check-Out
        </button>
      </div>
    </footer>
  );
};

export default AppFooter;
