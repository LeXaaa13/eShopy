import React, {useState, useEffect} from "react";
import "./CartCard.scss";
import {connect} from "react-redux";
import {removeFromCart} from "../../../redux/actions/actions";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

const matchDispatchToProps = dispatch => {
  return {
    removeFromCart: currentProd => {
      dispatch(removeFromCart(currentProd));
    }
  };
};

const CartCard = ({data, removeFromCart, total, setTotal}) => {
  const [counter, setCounter] = useState(1);

  const asc = () => {
    setCounter(counter + 1);
    setTotal(total + data.price);
  };

  const desc = () => {
    setCounter(counter - 1);
    setTotal(total - data.price);
  };

  const removeProd = () => {
    setTotal(total - data.price)
    removeFromCart(data.id)
  }

  useEffect(() => {
    if (counter < 1) {
      removeFromCart(data.id);
    }
  }, [counter]);

  return (
    <div className="cartCard">
      <div className="cartCard-content">
        <img src={`/image/${data.smallImage}`} alt="jacket" />
        <h3>
          {data.brand} {data.title}
        </h3>
        <div className="cartCard-content-btn">
          <button onClick={() => asc(data)}>+</button>
          <p>x{counter}</p>
          <button onClick={() => desc(data)}>-</button>
        </div>
      </div>
      <div className="cartCard-btn">
        <button onClick={() => removeProd()}>Remove</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(CartCard);
