import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { ProductConsumer } from "../context/context";
import SingleProductImg from "../images/singleProductBcg.jpeg";
import defaultBcg from "../images/defaultBcg.jpeg";

export default function SingleProductPage() {
  const _onError = (e) => {
    e.target.src = defaultBcg;
  };
  return (
    <>
      <Hero img={SingleProductImg} title="Single Product"></Hero>
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            <h1 id="wait">product loading..</h1>;
            console.log("Hello from loading");
          }
          const { company, description, id, price, title, image } =
            singleProduct;

          return (
            <section className="py-5">
              <div className="containter">
                <div className="row">
                  <div class="col-10 max-auto col-sm-8 col-md-6 my-3 ml-1">
                    <img
                      src={image}
                      onError={_onError}
                      alt={image}
                      style={{
                        background: "var(--darkGrey)",
                        marginLeft: "1rem",
                      }}
                      className="img-fluid img-thumbnail"
                      draggable="false"
                    />
                  </div>

                  <div class="col-10 max-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4 ">Model: {title}</h5>
                    <h5 className="text-capitalize text-muted mb-4 ">
                      Company: {company}
                    </h5>
                    <h5 className="text-main text-capitalize  mb-4 ">
                      Price: ${price}/-
                    </h5>
                    <p className="text-capitalize text-title">Info :</p>
                    <p>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      {" "}
                      add to cart{" "}
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
