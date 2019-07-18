import { isLoading, getAllMovies, throwError } from '../actions';
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
			dispatch(getAllMovies(movies));
			dispatch(isLoading(false));
		} catch (error) {
			dispatch(throwError(error));
		}
	};
};

import { isLoading, getNowPlaying, hasErrored } from '../actions';
import { fetchPopular } from './fetchPopular';
import { urlPopular } from '../Util/ApiCalls/urls';
import { fetchNowPlayingCleaner } from '../Util/Cleaners/fetchNowPlayingCleaner';
