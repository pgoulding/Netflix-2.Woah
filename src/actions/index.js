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

<<<<<<< HEAD
export const signIn = ({
  email,
  password,
  id,
  name
}) => ({
=======
export const signIn = ({email, password, id, name}) => ({
>>>>>>> master
  type: 'SIGN_IN',
  payload: {
    email,
    password,
<<<<<<< HEAD
    id,
=======
    id, 
>>>>>>> master
    name
  }
});

export const signOut = email => ({
  type: 'SIGN_OUT',
  payload: {
    email
  }
});

<<<<<<< HEAD
export const createAccount = ({
  name,
  password,
  email
}) => ({
=======
export const createAccount = ({ name, password, email }) => ({
>>>>>>> master
  type: 'CREATE_ACCOUNT',
  payload: {
    name,
    password,
    email
  }
});

<<<<<<< HEAD
export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  payload: {
    isLoading
  }
});

=======
>>>>>>> master
export const throwError = error => ({
  type: 'THROW_ERROR',
  payload: {
    error
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> master
