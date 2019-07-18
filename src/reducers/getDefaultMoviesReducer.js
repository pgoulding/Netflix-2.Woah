export const getDefaultMoviesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ALL_MOVIES':
      return payload.movies
    case 'TOGGLE_FAVORITE':
      const updatedState = state.map(category => {
        category.map(movie => {
          if (movie.id === payload.id) {
            movie.isFavorited = !movie.isFavorited;
          }
          return movie;
        });
        return category;
      });
      return updatedState;
    default:
      return state;
  }
};

//add category and favorite prop to each movie object