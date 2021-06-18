import React from "react";
import { ProductConsumer } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";
export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* Title */}
              <Title center="true" title="our Products" />
              {/* End of Title */}

              {/* Product Filter */}
              <ProductFilter />
              {/* End of Product Filter */}

              {/* Total Count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Total Products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              {/* End of Total Count */}

              {/* Products */}
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    Sorry, No items matched your search
                  </div>
                ) : (
                  filteredProducts.map((product) => {
                    return (
                      <Product key={product.id} product={product}></Product>
                    );
                  })
                )}
              </div>
              {/* End of Products */}
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
