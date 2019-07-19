export const cleanDefaultMovies = (results) => {
  return results.map(movieData => {
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
    }
  })
};

export const cleanCategoryMovies = (results) => {
  return results.map(movieData => {
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
    }
  })
};