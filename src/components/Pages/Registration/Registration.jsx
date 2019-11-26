import React, {useState, useEffect} from "react";
import "./Registration.scss";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {addUser, loginUser} from "../../../redux/actions/actions";
import UsersData from "../../../data/UsersData";

const matchDispatchToProps = dispatch => {
  return {
    addUser: newUser => {
      dispatch(addUser(newUser));
    },
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

const Registration = props => {
  const {users} = props;
  let usersArr = [...users, ...UsersData];
  let history = useHistory();
  
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("380");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let invalidLogin = usersArr.find(element => element.login === login)
    ? true
    : false;
  let invalidEmail =
    usersArr.find(element => element.email === email) &&
    email.includes("@" && ".")
      ? true
      : false;
  let validPhone = phone.toString().length == 12 ? true : false;
  let validPassword = password.length >= 6 ? true : false;

  const validator = () => {
    if (invalidLogin) {
      setLoginError("This login is already in use");
    }
    if (invalidEmail) {
      setEmailError(
        "Some problems with your email.Example : example@gmail.com"
      );
    }
    if (!validPhone) {
      setPhoneError("Your phone number must contains 12 figures");
    }
    if (!validPassword) {
      setPasswordError("Your password should contains at least 6 symbols");
    }
  };

  useEffect(() => {
    validator();
  }, [login, email, password, phone]);

  const registrationHandler = () => {
    if (
      !invalidLogin &&
      !invalidEmail &&
      validPhone &&
      validPassword &&
      name.length &&
      surname.length &&
      login.length &&
      email.length &&
      password.length &&
      phone.length &&
      city.length
    ) {
      props.addUser({
        id: users.length + password + login,
        name,
        surname,
        login,
        email,
        password,
        phone,
        city
      });
      props.loginUser({
        id: users.length + password + login,
        name,
        surname,
        login,
        email,
        password,
        phone,
        city
      });
      setName("");
      setSurname("");
      setLogin("");
      setEmail("");
      setPassword("");
      setPhone("380");
      setCity("");
      history.push("/");
    }
  };

  return (
    <div className="registration">
      <div className="container">
        <div className="registration-form">
          <div className="registration-form-item">
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
          <div className="registration-form-item">
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
          <div className="registration-form-item">
            <label>
              Email *
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {invalidEmail && (
                <p className="registration-form-item-error">{emailError}</p>
              )}
            </label>
          </div>
          <div className="registration-form-item">
            <label>
              Login *
              <input
                type="text"
                placeholder="Create login"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
              {invalidLogin && (
                <p className="registration-form-item-error">{loginError}</p>
              )}
            </label>
          </div>
          <div className="registration-form-item">
            <label>
              Password *
              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {!validPassword && (
                <p className="registration-form-item-error">{passwordError}</p>
              )}
            </label>
          </div>
          <div className="registration-form-item">
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
          <div className="registration-form-item">
            <label>
              Phone Number *
              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              {!validPhone && (
                <p className="registration-form-item-error">{phoneError}</p>
              )}
            </label>
          </div>
          <button
            className="registration-form-btn"
            onClick={() => registrationHandler()}
          >
            Submit registration
          </button>
          <Link to="/login" className="registration-form-link">
            Turn back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(Registration);
