import React, { Component } from "react";
import styled from "styled-components";

import { FaDollyFlatbed } from "react-icons/fa";
import { ImRedo } from "react-icons/im";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDollyFlatbed />,
        title: "free shipping",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        id: 2,
        icon: <ImRedo />,
        title: "30 Days return policy",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        id: 3,
        icon: <RiMoneyDollarBoxLine />,
        title: "Secured payment",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  };

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item, index) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3 "
                  key={item.id}
                >
                  <div className="whiteBorder">
                    <div className="service-icon">{item.icon}</div>
                    <div className="mt-3 text-capitalize h4 item-title">
                      {item.title}
                    </div>
                    <div className="mt-3 item-text">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  .item-title,
  .item-text {
    color: var(--mainWhite) !important;
  }
  background: rgb(96 183 234);
  .service-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
  p {
    color: var(--mainWhite);
  }
  .whiteBorder {
    border-right: solid 5px var(--mainWhite);
    border-left: solid 5px var(--mainWhite);
    /* border-bottom:solid 1px var(--mainWhite);
    border-top:solid 1px var(--mainWhite); */
    border-radius: 4%;
    margin: 2px !important;
    padding: 2px;
  }
`;
