import React from "react";
import Hero from "../components/Hero";
import defaultBCG from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
export default function DefaultPage() {
  return (
    <>
      <Hero img={defaultBCG} title="Oops... 404" max="true">
        <h2 className="text-uppercase" style={{ margin: "3rem" }}>
          Page not found
        </h2>

        <Link to="/" class="main-link">
          return Home
        </Link>
      </Hero>
    </>
  );
}
