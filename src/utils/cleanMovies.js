export const cleanMovies = (genre, results) => {
  const newResults = results.map(movieData => {
    // console.log('movie data', movieData)
    return {
      ...movieData,
      movie_id: movieData.id,
      isFavorited: false,
      poster_path: `http://image.tmdb.org/t/p/w300${movieData.poster_path}`,
      backdrop_path: `http://image.tmdb.org/t/p/original${movieData.backdrop_path}`
    };
  });
  return newResults;
};

// genre is overriding existing genre in each movieData