import { isLoading, updateMovies, throwError } from '../actions';
import { url } from '../Util/ApiCalls/urls';
import { cleanerFunction } from '../utils/cleanerFunction';

export const fetchDefaultData = url => {
	return async dispatch => {
		try {
			dispatch(isLoading(true));
			const response = await fetch(url);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			const movieData = data.results;
			const movies = await cleanerFunction(movieData);
			dispatch(updateMovies(movies));
			dispatch(isLoading(false));
		} catch (error) {
			dispatch(throwError(error));
		}
	};
};