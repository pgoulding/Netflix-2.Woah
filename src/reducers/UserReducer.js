<<<<<<< HEAD
const userReducer = (state = {}, action) => {
  const { type, payload } = action;
=======
import * as user from '../utils/API/ApiFetch';

export const userReducer = (state = {}, action) => {
  const {
    type,
    payload
  } = action;
>>>>>>> 85dcc45e79fdff0feb7b1817f4c3e192066b666a
  switch (type) {
    case 'SIGN_IN':
      return {
        ...payload, user_id: payload.id
      };
    case 'SIGN_OUT':
      return {};
    case 'SET_FAVORITES':
      return {...state, favorites:payload.favorites};
    case 'ADD_FAVORITE':
      return {...state, favorites: [...state.favorites, payload.movie] }
    default:
      return state;
  }
<<<<<<< HEAD
};

export default userReducer;
=======
};
>>>>>>> 85dcc45e79fdff0feb7b1817f4c3e192066b666a
