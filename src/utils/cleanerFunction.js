<<<<<<< HEAD
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
=======
export const cleanMovies = (genre, results) => {
  const newResults = results.map(movieData => {
    return { ...movieData, movie_id: movieData.id, isFavorited: false, genre };
  });
  return newResults;
};
>>>>>>> master
