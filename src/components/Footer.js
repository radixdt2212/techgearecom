import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import { FcCopyright } from "react-icons/fc";

export default function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright <FcCopyright size={25}></FcCopyright> Radix{" "}
                    {new Date().getFullYear()} all rights reserved
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map((item) => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 2.12rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
