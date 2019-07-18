import * as user from '../utils/API/ApiFetch'

const userReducer = (state = {}, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'SIGN_IN':
      // fetch from backend
      // find user from all users
      // if they do exsist/and password matches, return user object
      // if they don't exsist
      return {...payload, user_id: payload.id}
    case 'SIGN_OUT':
      return {};
    // case 'CREATE_ACCOUNT':
    //   console.log(payload)
    //   return user.sendNewAccount(payload);
    default:
      return state;
  }
};

export default userReducer;

//toggle log in - bool vs obj