export const searchTermReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SEARCH_TERM':
      return payload.term;
    default:
      return state;
  }
};
