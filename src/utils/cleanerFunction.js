export const cleanDefaultMovies = (genre, results) => {
  const newResults = results.map(movieData => {
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
      genre
    }
  })
  return [...newResults]
};

export const cleanCategoryMovies = (genre, results) => {
  const newResults = results.map(movieData => {
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
      genre
    }
  })
  return [...newResults]
};