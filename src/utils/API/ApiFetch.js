// import { getAllMovies } from './actions';
import apiKey from '../../apikey';
import {
	cleanDefaultCategories,
	cleanCategoryMovies
} from '../cleanerFunction';
import {
	newUserUrl,
	userSignInURL
} from './apiUrls';
//import default and category url and move url to apiurls file

const getDefaultData = async () => {
	const movieList = ['now_playing', 'popular', 'top_rated'];
	return Promise.all(
		movieList.map(async genre => {
			try {
				const defaultMovies = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
				const response = await fetch(defaultMovies);
				const parsed = await response.json();
				const cleaned = await cleanDefaultCategories(genre, parsed.results);
				return cleaned;
			} catch (error) {
				throw Error(error.message);
			}
		})
	);
};

const getCategoryData = async () => {
	const categoryList = ['Action', 'Comedy', 'Documentary', 'Family', 'Horror', 'Romance', 'Science Fiction'];
	const categoryId = [28, 35, 99, 10751, 27, 10749, 878];
	return Promise.all(
		categoryList.map(async genre => {
			try {
				const categoryMovies = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
				const response = await fetch(categoryMovies);
				const parsed = await response.json();
				const cleaned = await cleanCategoryMovies(genre, parsed.results);
				return cleaned;
			} catch (error) {
				throw Error(error.message);
			}
		})
	);
};

const sendUserLogin = async (email, password) => {
	const user = {
		email,
		password
	};
	try {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		};
		const response = await fetch(userSignInURL, options);
		const parsed = await response.json();
		return parsed;
	} catch (error) {
		throw Error('Failed to log in ', error);
	}
};

const sendNewAccount = async newAccount => {
	try {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newAccount)
		};
		const response = await fetch(newUserUrl, options);
		return response;
	} catch (error) {
		throw Error('Failed to create account ', error);
	}
};

const sendFavorite = async favoriteMovie => {
	console.log(favoriteMovie);
	try {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(favoriteMovie)
		};
		const response = await fetch(`${userSignInURL}/favorites/new`, options);
		const parsed = await response.json();
		return parsed;
	} catch (error) {
		throw Error('Failed to favorite', error);
	}
};

export {
	getDefaultData,
	sendNewAccount,
	sendUserLogin,
	sendFavorite
};