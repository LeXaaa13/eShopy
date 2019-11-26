import React, {useState} from "react";
import "./Login.scss";
import {connect} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {loginUser} from "../../../redux/actions/actions";
import UsersData from "../../../data/UsersData";

const matchDispatchToProps = dispatch => {
  return {
    loginUser: user => {
      dispatch(loginUser(user));
    }
  };
};

const mapStateToProps = store => {
  return {
    users: store.users
  };
};

const Login = ({loginUser, users}) => {
  let usersArr = [...users, ...UsersData];
  let history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const findUser = usersArr.find(user => user.login === login);

  const loginHandler = () => {
    if (login.length && password.length) {
      if (findUser && findUser.password === password) {
        loginUser(findUser);
        setPassword("");
        setLogin("");
        history.push("/");
      } else if (!findUser) {
        setError("Incorrect login or password");
      }
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login-form">
          <div className="login-form-item">
            <label>
              Login
              <input
                type="text"
                placeholder="Enter login"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
            </label>
          </div>
          <div className="login-form-item">
            <label>
              Password
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
          </div>
          {<p className="login-form-item-error">{error}</p>}
          <button className="login-form-btn" onClick={() => loginHandler()}>
            Log In
          </button>
          <Link to="/registration" className="login-form-link">
            I have no account yet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
