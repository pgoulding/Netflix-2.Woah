export const cleanMovies = (genre, results) => {
  const newResults = results.map(movieData => {
    return {
      ...movieData,
      genre,
      movie_id: movieData.id,
      isFavorited: false,
      poster_path: `http://image.tmdb.org/t/p/w300${movieData.poster_path}`,
      backdrop_path: `http://image.tmdb.org/t/p/original${movieData.backdrop_path}`
    };
  });
  return newResults;
};

// genre is overriding existing genre in each movieData