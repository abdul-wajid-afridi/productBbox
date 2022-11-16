import React, { useState } from "react";
import { useEffect } from "react";
import { FaCartPlus, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AppGallary from "../components/AppGallary";
import AppSpinner from "../components/AppSpinner";
import AppWaring from "../components/AppWaring";
import AppFooter from "../components/Cart/AppFooter";
import ItemsCard from "../components/Cart/ItemsCard";
import { CartData, clearCart, removeItem } from "../redux/Features/CartSlice";
import CheckOutPage from "./CheckOutPage";

const Cart = () => {
  const { loading } = useSelector((state) => state.ItemsSlice);
  const { cartItems } = useSelector((state) => state.CartSlice);
  const [Model, setModel] = useState(false);

  const total = JSON.parse(localStorage.getItem("total"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CartData());
  }, [dispatch, clearCart]);
  return (
    <>
      {cartItems?.length <= 0 ? (
        <AppWaring title={"Items"} to="/">
          please add items to cart
        </AppWaring>
      ) : (
        <AppGallary>
          {loading ? (
            <AppSpinner />
          ) : (
            cartItems?.map((it) => {
              return (
                <ItemsCard
                  name={it?.name}
                  img={it?.img}
                  id={it?.id}
                  price={it?.price}
                  onRemove={() => dispatch(removeItem(it?.id))}
                />
              );
            })
          )}
          <AppFooter
            total={total}
            handleCheckOut={() => setModel(!Model)}
            onClick={() => dispatch(clearCart())}
          />
        </AppGallary>
      )}
      {/* this is just a check out pop model  */}
      {Model ? (
        <CheckOutPage
          onClick={() => {
            toast.success("check out completed");
            dispatch(clearCart());
            setModel(!Model);
          }}
          handleModel={() => setModel(!Model)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
