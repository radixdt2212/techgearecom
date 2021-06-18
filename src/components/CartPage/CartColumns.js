import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* Single Column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>
        {/* End of Single Column */}

        {/* Single Column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Name</p>
        </div>
        {/* End of Single Column */}

        {/* Single Column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        {/* End of Single Column */}

        {/* Single Column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        {/* End of Single Column */}

        {/* Single Column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
        {/* End of Single Column */}

        {/* Single Column */}
        <div className="col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
        {/* End of Single Column */}
      </div>
    </div>
  );
}
