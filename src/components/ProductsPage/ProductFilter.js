import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";
export default function ProductFilter() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;
        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div className="">
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Products"
                    className="filter-item form-control"
                    onChange={handleChange}
                    value={search}
                  />
                </div>
                {/* end of text search */}

                {/* Category start */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    className="form-select"
                    value={company}
                    onChange={handleChange}
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end Category  */}

                {/* Price Range start */}
                <div>
                  <p className="mb-2">
                    Product price : <span>$ {price}</span>
                  </p>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="form-range"
                    value={price}
                    min={min}
                    max={max}
                    onChange={handleChange}
                  />
                </div>
                {/* end Price Range  */}

                {/* Free Shipping start */}
                <div>
                  <label className="form-check-label">&nbsp;</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="shipping"
                      id="shipping"
                      className="form-check-input"
                      checked={shipping && true}
                      onChange={handleChange}
                    />
                    <label htmlFor="shipping" className="form-check-label">
                      Free Shipping
                    </label>
                  </div>
                </div>
                {/* end Free Shipping  */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-items,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
