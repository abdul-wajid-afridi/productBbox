import React from "react";
import { FaTrash } from "react-icons/fa";

const ItemsCard = ({ name, price, img, id, onRemove }) => {
  return (
    <section className="flex justify-between items-center border my-3  h-[150px] w-[90%]">
      <div className="flex items-center gap-10">
        <div className="h-[120px] w-[120px] ">
          <img
            src={`http://localhost:3000/${img}`}
            alt={name}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-3 text-gray-700">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 text-gray-700">
        <button onClick={onRemove} className="text-red-600 text-xl">
          <FaTrash />
        </button>
      </div>
    </section>
  );
};

export default ItemsCard;
