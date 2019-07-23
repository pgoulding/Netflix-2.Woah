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

export const setFavorites = favorites => ({
  type: 'SET_FAVORITES',
  payload: {
    favorites
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

export const signOut = () => ({
  type: 'SIGN_OUT'
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

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  payload: {
    isLoading
  }
});

export const searchQuery = searchTerm => ({
  type:'SEARCH_QUERY',
  payload:{
    searchTerm
  }
})

export const addMovie = movie => ({
  type:'ADD_FAVORITE',
  payload:{
    movie
  }
})
