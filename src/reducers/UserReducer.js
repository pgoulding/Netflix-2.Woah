import * as user from '../utils/API/ApiFetch';

const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGN_IN':
      return { ...payload, user_id: payload.id };
    case 'SIGN_OUT':
      return {};
    default:
      return state;
  }
};

export default userReducer;

//toggle log in - bool vs obj
