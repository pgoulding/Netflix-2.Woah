export const collectAllGenresReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'COLLECT_ALL_GENRES':
      return payload.genres;
    default:
      return state;
  }
};
