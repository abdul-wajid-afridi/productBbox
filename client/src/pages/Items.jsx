import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppCard from "../components/AppCard";
import AppGallary from "../components/AppGallary";
import AppSpinner from "../components/AppSpinner";
import AppWaring from "../components/AppWaring";
import { addToCart, calculateTotal } from "../redux/Features/CartSlice";
import {
  asyncDeleteItems,
  asyncGetItems,
  asynGetSingleItem,
} from "../redux/Features/ItemsSlice";
import { toast } from "react-toastify";
import AppInput from "../components/Forms/AppInput";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.ItemsSlice);
  const { cartItems } = useSelector((state) => state.CartSlice);

  const [Search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncGetItems());
  }, [dispatch, Search]);
  // console.log(cartItems);

  return (
    <>
      <AppInput
        style={"m-4 sticky top-2 z-10"}
        w="w-[230px]"
        placeholder="Search By Name and Price"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {items?.length <= 0 ? (
        <AppWaring title={"Items"} to="/add-post">
          please add items
        </AppWaring>
      ) : (
        <AppGallary>
          {loading ? (
            <AppSpinner />
          ) : (
            items
              ?.filter((elem) => {
                if (Search == "") return elem;
                else if (
                  elem?.name.toLowerCase().includes(Search.toLowerCase()) ||
                  elem?.price.toLowerCase().includes(Search.toLowerCase())
                )
                  return elem?.name;
              })
              .map((it) => {
                return (
                  <AppCard
                    key={it?.id}
                    onClick={() => {
                      dispatch(addToCart(it));
                      dispatch(calculateTotal());
                      toast.success("added To Cart");
                    }}
                    handleDelete={() =>
                      !Search
                        ? dispatch(asyncDeleteItems({ id: it.id, toast }))
                        : ""
                    }
                    handleEdit={() => {
                      dispatch(asynGetSingleItem(it.id));
                      navigate("/add-post");
                    }}
                    name={it?.name}
                    price={it?.price}
                    img={it?.img}
                    id={it?.id}
                  />
                );
              })
          )}
        </AppGallary>
      )}
    </>
  );
};

export default Items;
