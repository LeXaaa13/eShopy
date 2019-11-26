export const addUser = newUser => {
  return {type: "ADD_USER", newUser};
};

export const loginUser = user => {
  return {type: "LOGIN_USER", user};
};

export const logoutUser = arr => {
  return {type: "LOGOUT_USER", arr};
};

export const addToCart = newProd => {
  return {type: "ADD_TO_CART", newProd};
};

export const removeFromCart = currentProd => {
  return {type: "REMOVE_FROM_CART", currentProd};
};

export const addOrder = order => {
  return {type: "ADD_ORDER", order};
};

export const cancelOrder = currentOrder => {
  return {type: "CANCEL_ORDER", currentOrder};
};
