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

export const chooseMovie = (id) => ({
  type: 'CHOOSE_MOVIE',
  payload: {
    id
  }
});

export const toggleFavorite = (id, favorited) => ({
  type: 'TOGGLE_FAVORITE',
  payload: {
    id,
    favorited
  }
});

export const setFavorites = favorites => ({
  type: 'SET_FAVORITES',
  payload: {
    favorites
  }
});

export const signIn = user => ({
  type: 'SIGN_IN',
  payload: {
    user
  }
});

export const signOut = () => ({
  type: 'SIGN_OUT'
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
  type: 'SEARCH_QUERY',
  payload: {
    searchTerm
  }
});

export const addMovie = movie => ({
  type: 'ADD_FAVORITE',
  payload: {
    movie
  }
});