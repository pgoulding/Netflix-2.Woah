export const getAllMovies = movies => ({
  type: 'GET_ALL_MOVIES',
  payload: {
    movies
  }
});

export const selectCategory = category => ({
  type: 'SELECT_CATEGORY',
  payload: {
    category
  }
});

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  payload: {
    id
  }
});

export const signIn = ({ email, password, id, name }) => ({
  type: 'SIGN_IN',
  payload: {
    email,
    password,
    id,
    name
  }
});

export const signOut = email => ({
  type: 'SIGN_OUT',
  payload: {
    email
  }
});

export const createAccount = ({ name, password, email }) => ({
  type: 'CREATE_ACCOUNT',
  payload: {
    name,
    password,
    email
  }
});

export const throwError = error => ({
  type: 'THROW_ERROR',
  payload: {
    error
  }
});
