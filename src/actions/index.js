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

export const signIn = (userName, password) => ({
  type: 'SIGN_IN',
  payload: {
    userName,
    password
  }
});

export const signOut = email => ({
  type: 'SIGN_OUT',
  payload: {
    email
  }
});

export const createAccount = (name, userName, password, email) => ({
  type: 'CREATE_ACCOUNT',
  payload: {
    name,
    userName,
    password,
    email
  }
});
