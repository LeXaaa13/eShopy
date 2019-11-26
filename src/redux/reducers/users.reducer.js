const usersInitialState = JSON.parse(localStorage.getItem('newUsers')) || [];

export default (state = usersInitialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const { newUser } = action;
      const userInfo = { ...newUser, isAdmin : false, isLogin : true}
      const newState = [...state, userInfo];
      localStorage.setItem('newUsers', JSON.stringify(newState))
      return newState;
    default: return state
  }
};

