export const getMoviesReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'GET_ALL_MOVIES':
      return payload.movies
    case 'SELECT_CATEGORY':
      return [...payload.movies];
    case 'TOGGLE_FAVORITE':
      const updatedState = state.map(movie => {
        if (movie.id === payload.id) {
          movie.isFavorited = !movie.isFavorited;
        }
        return movie;
      });
      return updatedState;
    default:
      return state;
  }
};

//add category and favorite prop to each movie object