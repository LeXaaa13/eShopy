import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CartCard from "../../ProductCards/CartCard/CartCard";
import "./Cart.scss";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

const Cart = ({cart, total, setTotal}) => {
  useEffect(() => {
  }, [total])
  return (
    <div className="cart">
      <div className="container">
        <div className="cart-content">
          <h1>Your order</h1>
          {cart.length
            ? cart.map(prod => {
                return (
                  <>
                    <CartCard data={prod} total={total} setTotal={setTotal} />
                  </>
                );
              })
            : null}
          <h2>Total sum : {total}$</h2>
          <Link to="/order" className="cart-content-link">
            Make order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Cart);
