import React, {useEffect} from "react";
import "./DefaultCard.scss";
import {connect} from "react-redux";
import {addToCart} from "../../../redux/actions/actions";

const matchDispatchToProps = dispatch => {
  return {
    addToCart: newProd => {
      dispatch(addToCart(newProd));
    }
  };
};

const DefaultCard = ({data, addToCart, total, setTotal}) => {
  const addToCartHandler = data => {
    setTotal(total + data.price);
    addToCart(data);
  };

  return (
    <div className="defaultCard">
      <div className="defaultCard-container">
        <div className="defaultCard-container-noHover">
          <img src={`/image/${data.image}`} alt="jacket" />
          <h2>{data.title}</h2>
          <h3>{data.brand}</h3>
          <span>{data.price}</span>
        </div>
        <div className="defaultCard-container-hover">
          <div className="defaultCard-container-hover-info">
            <img src={`/image/${data.smallImage}`} alt="small-jacket" />
            <h3>
              {data.brand} {data.title}
            </h3>
            <p>sizes : s - m - l - xl</p>
            <img
              className="defaultCard-container-hover-img"
              src={"/image/product-hover-info-colors.png"}
              alt="colors"
            />
          </div>
          <div className="defaultCard-container-hover-btn">
            <button onClick={() => addToCartHandler(data)}>
              <img src={"/image/add-to-cart-icon.png"} alt="colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, matchDispatchToProps)(DefaultCard);
