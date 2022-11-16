import React from "react";
import { FaIdCard, FaCalendar, FaCcMastercard, FaTimes } from "react-icons/fa";
import AppInput from "../components/Forms/AppInput";
import Form from "../components/Forms/Form";
import "./styles/CheckOutPage.css";
const CheckOutPage = ({ onClick, handleModel }) => {
  const total = JSON.parse(localStorage.getItem("total"));

  return (
    <section className="checkOut__container">
      <Form width={"bg-indigo-800/70 w-[390px] relative"}>
        <AppInput placeholder="card Holder Name" icon={<FaIdCard />} />
        <AppInput placeholder="Card Number" icon={<FaCcMastercard />} />
        <AppInput placeholder="Expiray Date" icon={<FaCalendar />} />
        <AppInput placeholder="CVC Date" icon={<FaIdCard />} />
        <button onClick={onClick} className="checkOut__btn">
          Check Out
        </button>
        <p className="checkOut__total">total : {total}</p>
        <span onClick={handleModel} className="checkOut__cancle">
          <FaTimes />
        </span>
      </Form>
    </section>
  );
};

export default CheckOutPage;
