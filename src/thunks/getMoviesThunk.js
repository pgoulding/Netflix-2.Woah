import { isLoading, updateMovies, throwError } from '../actions';
import { cleanMovies } from '../utils/cleanerFunction';
import apiKey from '../apikey'

export const getMovies = ({genre, url}) => {
	return async dispatch => {
		let fetchUrl = url || `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
		try {
			dispatch(isLoading(true));
			const response = await fetch(fetchUrl);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			const movieData = data.results;
			const movies = await cleanMovies(movieData);
			dispatch(updateMovies(movies, genre));
			dispatch(isLoading(false));
		} catch (error) {
			dispatch(throwError(error));
		}
	};
};