import React, {useState, useEffect} from "react";
import "./App.scss";
import {Route, Switch} from "react-router-dom";
import Preloader from "./components/Pages/Preloader/Preloader";
import Header from "./components/Pages/Header/Header";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Products from "./components/Pages/Products/Products";
import Others from "./components/Pages/Others/Others";
import Registration from "./components/Pages/Registration/Registration";
import Login from "./components/Pages/Login/Login";
import Cart from "./components/Pages/Cart/Cart";
import Order from "./components/Pages/Order/Order";
import {connect} from "react-redux";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [total, setTotal] = useState(0)

  return (
    <React.Fragment>
      {isActive && (
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Preloader
                {...props}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            );
          }}
        />
      )}
      {!isActive && (
        <React.Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return <Home {...props} total={total} setTotal={setTotal} />;
              }}
            />
            <Route
              exact
              path="/products"
              render={props => {
                return (
                  <Products {...props} total={total} setTotal={setTotal} />
                );
              }}
            />
            <Route exact path="/hot-deals" component={Others} />
            <Route exact path="/about" component={Others} />
            <Route exact path="/contacts" component={Others} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/cart"
              render={props => {
                return <Cart {...props} total={total} setTotal={setTotal} />;
              }}
            />
            <Route exact path="/order" component={Order} />
          </Switch>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default connect(null, null)(App);
