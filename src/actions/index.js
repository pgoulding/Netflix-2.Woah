export const updateMovies = (movies, genre) => ({
  type: 'UPDATE_MOVIES',
  payload: {
    movies,
    genre
  }
});

export const chooseGenre = genre => ({
  type: 'CHOOSE_GENRE',
  payload: {
    genre
  }
});

export const chooseMovie = (title, id) => ({
  type: 'CHOOSE_MOVIE',
  payload: {
    title,
    id
  }
});

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  payload: {
    id
  }
});

export const signIn = user => ({
  type: 'SIGN_IN',
  payload: {
    user
  }
});

export const signOut = () => ({
  type: 'SIGN_OUT',

});

// export const createAccount = ({
//   name,
//   password,
//   email
// }) => ({
//   type: 'CREATE_ACCOUNT',
//   payload: {
//     name,
//     password,
//     email
//   }
// });
//not used in reducers...

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