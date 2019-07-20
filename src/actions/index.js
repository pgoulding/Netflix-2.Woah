export const updateMovies = (movies, genre) => ({
  type: 'UPDATE_MOVIES',
  payload: {
    movies,
    genre
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

export const signOut = state => ({
  type: 'SIGN_OUT',
  payload: {
    ...state
  }
});

<<<<<<< HEAD
// export const createAccount = ({ name, password, email }) => ({
//   type: 'CREATE_ACCOUNT',
//   payload: {
//     name,
//     password,
//     email
//   }
// });
=======
export const createAccount = ({
  name,
  password,
  email
}) => ({
  type: 'CREATE_ACCOUNT',
  payload: {
    name,
    password,
    email
  }
});
>>>>>>> thunks-revised

export const throwError = error => ({
  type: 'THROW_ERROR',
  payload: {
    error
  }
});

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  payload: {
    isLoading
  }
});