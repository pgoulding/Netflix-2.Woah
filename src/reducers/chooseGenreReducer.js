export const chooseGenreReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHOOSE_GENRE':
      return payload.genre;
    default:
      return state;
  }
};
