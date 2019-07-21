import { isLoading, updateMovies, throwError } from '../actions';
import { cleanMovies } from '../utils/cleanerFunction';
import apiKey from '../apikey';

export const getMovies = genre => {
  return async dispatch => {
    let fetchUrl = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
    try {
      dispatch(isLoading(true));
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const movieData = data.results;
      const movies = await cleanMovies(genre, movieData);
      dispatch(updateMovies(movies, genre));
      dispatch(isLoading(false));
      return Promise.all(movies);
    } catch (error) {
      dispatch(throwError(error));
    }
  };
};
