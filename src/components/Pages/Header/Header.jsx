import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import "./Header.scss";
import {logoutUser} from "../../../redux/actions/actions";

const matchDispatchToProps = dispatch => {
  return {
    logoutUser: arr => {
      dispatch(logoutUser(arr));
    }
  };
};

const mapStateToProps = store => {
  return {
    loginUser: store.loginUser
  };
};

const Header = ({loginUser, logoutUser}) => {
  const logoutHandler = () => {
    logoutUser([]);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-up">
          <div className="header-up-info">
            <div className="header-up-info-mail">
              <img src={"/image/mail-icon.png"} alt="mail" />
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHDhqjxXjcNNclgcssbZVsDtKjqQThNHNdRpJrzXDPDwTqtDJjwTBXDzFwXJnBpLhDlBB">
                varvar130201@gmail.com
              </a>
            </div>
            <div className="header-up-info-phone">
              <img src={"/image/phone-icon.png"} alt="phone" />
              <a href="#">095 - 60 - 27 - 524</a>
            </div>
          </div>
          <div className="header-up-info-socials">
            <a href="https://uk-ua.facebook.com">
              <img src={"/image/facebook.png"} alt="facebook" />
            </a>
            <a href="https://twitter.com">
              <img src={"/image/twitter.png"} alt="twitter" />
            </a>
            <a href="https://google.com">
              <img src={"/image/google.png"} alt="google" />
            </a>
            <a href="https://instagram.com">
              <img src={"/image/instagram.png"} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="header-down">
          <div className="header-down-info">
            <div className="header-down-info-logo">
              <Link to="/">
                <img src={"/image/logo.png"} alt="logo" />
              </Link>
            </div>
            <div className="header-down-info-nav">
              <NavLink to="/" activeStyle={{color: "orange"}}>
                Home
              </NavLink>
              <NavLink to="/products" activeStyle={{color: "orange"}}>
                Products
              </NavLink>
              <NavLink to="/hot-deals" activeStyle={{color: "orange"}}>
                Hot Deals
              </NavLink>
              <NavLink to="/about" activeStyle={{color: "orange"}}>
                About
              </NavLink>
              <NavLink to="/contacts" activeStyle={{color: "orange"}}>
                Contacts
              </NavLink>
            </div>
          </div>
          <div className="header-down-others">
            <div className="header-down-others-user">
              {loginUser.length ? (
                <p>
                  Welcome,
                  <span>{loginUser[0].name}!</span>
                </p>
              ) : null}
              {loginUser.length ? (
                <button onClick={logoutHandler}>Log out</button>
              ) : (
                <Link to="/login">
                  <img src={"/image/user-icon.png"} alt="login" />
                </Link>
              )}
            </div>
            <Link to="/cart" className="header-down-others-cart">
              <img src={"/image/cart-icon.png"} alt="cart" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
