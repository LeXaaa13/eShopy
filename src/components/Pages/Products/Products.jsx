import React, {useState} from "react";
import "./Products.scss";
import DefaultCard from "../../ProductCards/DefaultCard/DefaultCard";
import {
  ManProducts,
  WomenProducts,
  ChildrensProducts,
  HotDealsProducts
} from "../../../data/ProductsData";

const Products = ({total, setTotal}) => {
  const productsArr = [
    ...ManProducts,
    ...WomenProducts,
    ...ChildrensProducts,
    ...HotDealsProducts
  ];
  
  const [categories, setCategories] = useState("Man");
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");


  return (
    <div className="products">
      <div className="container">
        <div className="products-content">
          <div className="products-content-aside">
            <div className="products-content-aside-item">
              <h3 className="products-content-aside-item-title">Categories</h3>
              <label
                htmlFor="radio"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio"
                  value="Man"
                  onChange={e => setCategories(e.target.value)}
                  className="products-content-aside-item-label-input"
                />
                Man
              </label>
              <label
                htmlFor="radio"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio"
                  value="Women"
                  onChange={e => setCategories(e.target.value)}
                  className="products-content-aside-item-label-input"
                />
                Women
              </label>
              <label
                htmlFor="radio"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio"
                  value="Children"
                  onChange={e => setCategories(e.target.value)}
                  className="products-content-aside-item-label-input"
                />
                Children
              </label>
              <label
                htmlFor="radio"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio"
                  value="hotDeals"
                  onChange={e => setCategories(e.target.value)}
                  className="products-content-aside-item-label-input"
                />
                Hot Deals
              </label>
            </div>
            <div className="products-content-aside-item">
              <h3 className="products-content-aside-item-title">Sizes</h3>
              <label
                htmlFor="radio1"
                className="products-content-aside-item-label"
              >
                <input
                  type="checkbox"
                  // name="radio1"
                  className="products-content-aside-item-label-input"
                  value="S"
                  onChange={e => setSize(e.target.value)}
                />
                Small
              </label>
              <label
                htmlFor="radio1"
                className="products-content-aside-item-label"
              >
                <input
                  type="checkbox"
                  // name="radio1"
                  className="products-content-aside-item-label-input"
                  value="M"
                  onChange={e => setSize(e.target.value)}
                />
                Medium
              </label>
              <label
                htmlFor="radio1"
                className="products-content-aside-item-label"
              >
                <input
                  type="checkbox"
                  // name="radio1"
                  className="products-content-aside-item-label-input"
                  value="L"
                  onChange={e => setSize(e.target.value)}
                />
                Large
              </label>
              <label
                htmlFor="radio1"
                className="products-content-aside-item-label"
              >
                <input
                  type="checkbox"
                  // name="radio1"
                  className="products-content-aside-item-label-input"
                  value="XL"
                  onChange={e => setSize(e.target.value)}
                />
                XLarge
              </label>
            </div>
            <div className="products-content-aside-item">
              <h3 className="products-content-aside-item-title">Brands</h3>
              <label
                htmlFor="radio2"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio2"
                  className="products-content-aside-item-label-input"
                  value="Reebok"
                  onChange={e => setBrand(e.target.value)}
                />
                Reebok
              </label>
              <label
                htmlFor="radio2"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio2"
                  className="products-content-aside-item-label-input"
                  value="Addidas"
                  onChange={e => setBrand(e.target.value)}
                />
                Addidas
              </label>
              <label
                htmlFor="radio2"
                className="products-content-aside-item-label"
              >
                <input
                  type="radio"
                  name="radio2"
                  className="products-content-aside-item-label-input"
                  value="Nike"
                  onChange={e => setBrand(e.target.value)}
                />
                Nike
              </label>
              <label htmlFor="" className="products-content-aside-item-label">
                <input
                  type="radio"
                  name="radio2"
                  className="products-content-aside-item-label-input"
                  value="Active"
                  onChange={e => setBrand(e.target.value)}
                />
                Active
              </label>
            </div>
          </div>
          <div className="products-content-card">
            {productsArr.map(elem => {
              if (categories === elem.categories && !elem.isBestseller) {
                return (
                  <DefaultCard data={elem} total={total} setTotal={setTotal} />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
