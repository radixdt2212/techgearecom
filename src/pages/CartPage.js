import React from "react";
import CartSection from "../components/CartPage/Cart";
export default function CartPage(props) {
  return (
    <>
      <CartSection history={props.history}></CartSection>
    </>
  );
}
