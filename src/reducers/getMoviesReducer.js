export const getMoviesReducer = (state = {}, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'UPDATE_MOVIES':
      return {
        ...state, [payload.genre]: payload.movies
      };
    case 'TOGGLE_FAVORITES':
      console.log('pl', payload);
      for (const key in state.movies) {
        state.movies[key].map(movie => {
          return {...movie, isFavorited: payload.favorite_ids.includes(movie.movie_id)}
        });
      }
      return state;
    default:
      return state;
  }
};

// how to favorite local movies from user array

// for (const key in state.movies) {
//   store.movies[key].forEach(movie => {
//     store.user.favorites.forEach(favorite => {
//       if (favorite.id === movie.id) {
//         movie.isFavorited = !movie.isFavorited;
//       }
//     })
//   })
// }