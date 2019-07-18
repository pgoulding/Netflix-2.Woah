import {
	isLoading,
	getAllMovies,
	throwError
} from '../actions';
import {
	url
} from '../utils/API/apiUrls';
import {
	cleanDefaultMovies
} from '../utils/cleanerFunction';

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
			const movies = await cleanerDefaultMovies(movieData);
			dispatch(getAllMovies(movies));
			dispatch(isLoading(false));
		} catch (error) {
			dispatch(throwError(error));
		}
	};
};