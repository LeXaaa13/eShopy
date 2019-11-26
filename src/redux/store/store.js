import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/users.reducer';
import loginUserReducer from '../reducers/loginUser.reducer';
import cartReducer from '../reducers/cart.reducer';
import ordersReducer from '../reducers/cart.reducer';

const initialState = {
  users: usersReducer,
  loginUser: loginUserReducer,
  cart: cartReducer,
  orders : ordersReducer
};

const rootReducer = combineReducers(initialState)

const store = createStore(rootReducer);

export default store;
