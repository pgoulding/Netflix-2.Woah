export const toggleFavoritesReducer = (state = false, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'TOGGLE_FAVORITES':
      return payload.isFavorited = !payload.isFavorited;
    default:
      return state
  }
}