export const getMoviesByCategoryReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_CATEGORIES':
      return payload.categories;
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