export const cleanDefaultCategories = (movie, results) => {
  const newResults = results.map(movie => {
    return {...movie, isFavorited: false}
  })
  return {[movie]: newResults}
}
