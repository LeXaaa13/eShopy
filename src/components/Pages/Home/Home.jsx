import React, {useState, useEffect} from "react";
import "./Home.scss";
import DefaultCard from "../../ProductCards/DefaultCard/DefaultCard";
import BestSellerCard from "../../ProductCards/BestSellerCard/BestSellerCard";
import {
  ManProducts,
  WomenProducts,
  ChildrensProducts,
  HotDealsProducts
} from "../../../data/ProductsData";

const Home = ({total, setTotal}) => {
  const productsArr = [
    ...ManProducts,
    ...WomenProducts,
    ...ChildrensProducts,
    ...HotDealsProducts
  ];
  
  return (
    <main className="main">
      <div className="Featured">
        <div className="container">
          <div className="Featured-titles">
            <h1>Full winter kit</h1>
            <h3>Half Jacket + Skiny Trousers + Boot leather</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, cupiditate?
            </p>
          </div>
          <div className="Featured-hotDeal">
            <h3>Price : 120$</h3>
            <button className="Featured-hotDeal-order">
              <img src={"/image/main-cart-icon.png"} alt="cart" />
            </button>
          </div>
        </div>
      </div>
      <div className="newArrivals">
        <div className="container">
          <div className="newArrivals-title">
            <h1>
              <span>New</span> arrivals
            </h1>
            <p className="newArrivals-title-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officia.
            </p>
          </div>
          <div className="newArrivals-product">
            {productsArr.map(prod => {
              if (prod.isNew) {
                return <DefaultCard data={prod} total={total} setTotal={setTotal} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <div className="hotDeals">
        <div className="container">
          <div className="hotDeals-title">
            <h1>
              <span>best</span> sales
            </h1>
            <p className="hotDeals-title-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officia.
            </p>
          </div>
          <div className="hotDeals-product">
            {productsArr.map(prod => {
              if (prod.isBestseller) {
                return <BestSellerCard data={prod} total={total} setTotal={setTotal}/>;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
