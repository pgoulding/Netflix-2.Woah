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
      // case 'TOGGLE_FAVORITE':
      //   const updatedState = state.map(genre => {
      //     genre.map(movie => {
      //       if (movie.id === payload.id) {
      //         movie.isFavorited = !movie.isFavorited;
      //       }
      //       return movie;
      //     });
      //     return genre;
      //   });
      // return updatedState;
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