export const searchQueryReducer = (state='', action) => {
  const {type, payload} = action
  switch (type) {
    case 'SEARCH_QUERY':
      return payload.searchQuery
    default:
      return state
  }
}