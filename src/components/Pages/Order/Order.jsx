import React, {useState} from "react";
import moment from "moment";
import "./Order.scss";
import {connect} from "react-redux";
import {addOrder} from "../../../redux/actions/actions";
import { useHistory } from "react-router-dom";

const mapStateToProps = store => {
  return {
    cart: store.cart,
    user: store.loginUser
  };
};

const matchDispatchToProps = dispatch => {
  return {
    addOrder: order => {
      dispatch(addOrder(order));
    }
  };
};

const Order = ({user, cart}) => {
  const [name, setName] = useState(user.length ? user[0].name : "");
  const [surname, setSurname] = useState(user.length ? user[0].surname : "");
  const [email, setEmail] = useState(user.length ? user[0].email : "");
  const [city, setCity] = useState(user.length ? user[0].city : "");
  const [address, setAddress] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [orderDate, setOrderDate] = useState(moment().format("LLL"));
  let history = useHistory()

  const orderHandler = () => {
    if (
      name.length &&
      surname.length &&
      email.length &&
      city.length &&
      address.length &&
      payMethod.length &&
      orderDate.length
    ) {
      const userInfo = [
        {
          name: name,
          surname: surname,
          email: email,
          city: city,
          address: address,
          payMethod: payMethod,
          orderDate: orderDate
        }
      ];
      const order = [[...userInfo], [...cart], {id : `${userInfo[0].email.split('@').join('').split('.').join('') + userInfo[0].address.split(' ').join('')}`}];
      addOrder(order);
	  localStorage.setItem("lastOrder", JSON.stringify(order));
	  history.push('/')
	}
  };

  return (
    <main className="order">
      <div className="container">
        <div className="order-form">
          <div className="order-form-item">
            <label>
              Name *
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="order-form-item">
            <label>
              Surname *
              <input
                type="text"
                placeholder="Enter surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
              />
            </label>
          </div>
          <div className="order-form-item">
            <label>
              Email *
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="order-form-item">
            <label>
              City *
              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </label>
          </div>
          <div className="order-form-item">
            <label>
              Address *
              <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </label>
          </div>
          <div className="order-form-item">
            <p>Pay Method *</p>
            <div className="order-form-item-radio">
              <label htmlFor="radio1">
                Cash
                <input
                  type="radio"
                  name="radio1"
                  value="Cash"
                  onChange={e => setPayMethod(e.target.value)}
                />
              </label>
              <label htmlFor="radio1">
                Cashless
                <input
                  type="radio"
                  name="radio1"
                  value="Cashless"
                  onChange={e => setPayMethod(e.target.value)}
                />
              </label>
            </div>
          </div>
          <button className="order-form-btn" onClick={() => orderHandler()}>
            Сheckout
          </button>
        </div>
      </div>
    </main>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(Order);
