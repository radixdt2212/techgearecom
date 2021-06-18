import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center="true"></Title>
      </div>
      {/* Cart Columns */}
      <CartColumns></CartColumns>
      {/* Cart List */}
      <CartList></CartList>
      {/* Cart Totals */}
      <CartTotals history={history}></CartTotals>
    </section>
  );
}
