import React from "react";
import { ProductConsumer } from "../../context/context";
import PayPalBtn from "./PayPalBtn";
export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-center text-title my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  style={{ fontWeight: "bolder", fontSize: "1.8rem" }}
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <h3>Subtotal : ${cartSubTotal}</h3>
                <h3>Tax : ${cartTax}</h3>
                <h3>Total : ${cartTotal}</h3>
                <PayPalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                ></PayPalBtn>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
