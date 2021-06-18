import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context/context";
import { FaRegSadCry } from "react-icons/fa";
export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {(value) => {
              const { cart, increment, decrement, removeItem } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    Cart is empty <FaRegSadCry />
                  </h1>
                );
              }
              return (
                <>
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                      cartItem={item}
                    ></CartItem>
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
