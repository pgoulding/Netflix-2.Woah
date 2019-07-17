const UserReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGN_IN':
      // fetch from backend
      // find user from all users
      // if they do exsist/and password matches, return user object
      // if they don't exsist
      return; // user object ? {...object} : null
    case 'SIGN_OUT':
      return {};
    case 'CREATE_ACCOUNT':
      return { ...payload };
    default:
      return state;
  }
};

export default UserReducer