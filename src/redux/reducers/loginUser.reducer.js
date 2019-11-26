const loginUserInitialState =
  JSON.parse(localStorage.getItem("loginUser")) || [];

export default (state = loginUserInitialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      const {user} = action;
      const newState = [user];
      localStorage.setItem("loginUser", JSON.stringify(newState));
      return newState;
    case "LOGOUT_USER":
      const {arr} = action;
      localStorage.setItem("loginUser", JSON.stringify(arr));
      return arr;
    default:
      return state;
  }
};
