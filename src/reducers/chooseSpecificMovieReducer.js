export const chooseSpecificMovieReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHOOSE_MOVIE':
      return {
        title: payload.title,
        id: payload.id
      };
    default:
      return state;
  }
};
