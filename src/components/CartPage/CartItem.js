import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { FcEmptyTrash } from "react-icons/fc";
import defaultBcg from "../../images/defaultBcg.jpeg";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem,
}) {
  const _onError = (e) => {
    e.target.src = defaultBcg;
  };
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center ">
      {/* image */}
      <div className="col-12 max-auto col-lg-2 mb-2">
        <img
          src={image}
          alt={image}
          width="60"
          className="img-fluid"
          onError={_onError}
        />
      </div>
      {/* end of image */}
      
      {/* title */}
      <div className="col-12 max-auto col-lg-2 mb-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      {/* end of title */}

      {/* price */}
      <div className="col-12 max-auto col-lg-2 pb-2 mb-2">
        <span className="d-lg-none">Price:</span>
        {price}
      </div>
      {/* end of price */}

      {/* Count Control */}
      <div className="col-12 max-auto col-lg-2 my-2 my-lg-0 mb-2">
        <div className="d-flex justify-content-center">
          <div>
            <AiFillMinusCircle
              size={25}
              className="cart-icon text-primary"
              onClick={() => decrement(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <AiFillPlusCircle
              size={25}
              className="cart-icon text-primary"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* end of Count Control */}

      {/* remove item */}
      <div className="col-12 max-auto col-lg-2 mb-2">
        <FcEmptyTrash size={30} onClick={() => removeItem(id)}></FcEmptyTrash>
      </div>
      {/* end of remove item */}

      {/* remove item */}
      <div className="col-12 max-auto col-lg-2 mb-2">
        <strong className="text-muted">Item Total: </strong>
        {total}
      </div>
      {/* end of remove item */}
    </div>
  );
}
