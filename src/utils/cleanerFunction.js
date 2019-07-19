export const cleanDefaultCategories = (genre, results) => {
  const newResults = results.map(movieData => {
    return { ...movieData, movie_id: movieData.id, isFavorited: false, genre };
  });
  return newResults;
};
