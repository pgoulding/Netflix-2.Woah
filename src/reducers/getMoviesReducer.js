export const getMoviesReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_MOVIES':
      return { ...state, [payload.genre]: payload.movies };
    case 'TOGGLE_FAVORITE':
      const updatedState = state.map(genre => {
        genre.map(movie => {
          if (movie.id === payload.id) {
            movie.isFavorited = !movie.isFavorited;
          }
          return movie;
        });
        return genre;
      });
      return updatedState;
    default:
      return state;
  }
};
