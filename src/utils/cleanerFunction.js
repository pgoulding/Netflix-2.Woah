export const cleanDefaultCategories = (genre, results) => {
  const newResults = results.map(movieData => {
    return {
      ...movieData,
      isFavorited: false,
      genre
    }
  })
  return [...newResults]
}

//do we want to add a category to each movie?