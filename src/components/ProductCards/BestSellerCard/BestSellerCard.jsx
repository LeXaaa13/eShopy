import React from "react";
import "./BestSellerCard.scss";
import {connect} from "react-redux";
import {addToCart} from "../../../redux/actions/actions";

const matchDispatchToProps = dispatch => {
  return {
    addToCart: newProd => {
      dispatch(addToCart(newProd));
    }
  };
};

const BestSellerCard = ({data, addToCart, total, setTotal}) => {
  const addToCartHandler = () => {
    setTotal(total + data.price)
    addToCart(data);
  };

  return (
    <div className="hotDeals-product-card">
      <div className="hotDeals-product-card-container">
        <div className="hotDeals-product-card-container-noHover">
          <img src={`/image/${data.image}`} alt="jacket" />
          <div className="hotDeals-product-card-container-noHover-info">
            <h3>
              {data.brand} {data.title}
            </h3>
            <h2>{data.price}</h2>
          </div>
        </div>
        <div className="hotDeals-product-card-container-hover">
          <img
            className="hotDeals-product-card-container-hover-img"
            src={`/image/${data.image}`}
            alt="jacket"
          />
          <div className="hotDeals-product-card-container-hover-info">
            <h3>
              {data.brand} {data.title}
            </h3>
            <button onClick={() => addToCartHandler(data)}>
              <img src={"/image/add-to-cart-icon.png"} alt="colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, matchDispatchToProps)(BestSellerCard);
