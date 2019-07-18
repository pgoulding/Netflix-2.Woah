export const cleanDefaultCategories = (genre, results) => {
  const newResults = results.map(movieData => {
    return {...movieData, isFavorited: false, genre}
  })
  return [...newResults]
}
