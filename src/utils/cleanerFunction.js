export const cleanDefaultCategories = (movie, results) => {
  const newResults = results.map(movieData => {
    return {...movieData, isFavorited: false}
  })
  return [...newResults]
}
