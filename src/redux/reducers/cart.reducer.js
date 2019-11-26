const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

export default (state = cartInitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const {newProd} = action;
      let newState = [...state, newProd];
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case "REMOVE_FROM_CART":
      const {currentProd} = action;
      const deletedState = [...state].filter(item => item.id !== currentProd);
      localStorage.setItem("cart", JSON.stringify(deletedState));
      return deletedState;

    case "CLEAR_CART":
      const clearCart = [];
      localStorage.setItem("cart", JSON.stringify(clearCart));
      return clearCart;
    default:
      return state;
  }
};
