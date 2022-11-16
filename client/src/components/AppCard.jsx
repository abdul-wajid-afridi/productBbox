import React from "react";
import AppButton from "./AppButton";
import "./styles/AppCard.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

const AppCard = ({
  name,
  price,
  img,
  onClick,
  handleDelete,
  id,
  handleEdit,
}) => {
  const { cartItems } = useSelector((state) => state.CartSlice);

  return (
    <div className="card">
      {/* <img src={img} alt={name} /> */}

      <img src={`http://localhost:3000/${img}`} alt={name} />
      <p>{name}</p>
      <h3>${price}</h3>
      <AppButton onClick={onClick}>Add To Cart</AppButton>
      <span onClick={handleDelete} className="card__trashcan">
        <FaTrash />
      </span>
      <span onClick={handleEdit} className="card__edit">
        <FaEdit />
      </span>
    </div>
  );
};

export default AppCard;
