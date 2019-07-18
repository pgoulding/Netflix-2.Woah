export const cleanDefaultMovies = (results) => {
  const newResults = results.map(movieData => {
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
    }
  })
  return [...newResults]
};

export const cleanCategoryMovies = (results) => {
  const newResults = results.map(movieData => {
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
    }
  })
  return [...newResults]
};