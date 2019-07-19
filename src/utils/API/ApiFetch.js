import apiKey from '../../apikey';
import {
	newUserUrl,
	userSignInURL
} from './apiUrls';
import {
	fetchCategoryData
} from '../../thunks/fetchCategoryData';
import {
	fetchDefaultData
} from '../../thunks/fetchDefaultData';

const getDefaultData = async () => {
	const movieList = ['now_playing', 'popular', 'top_rated'];
	movieList.forEach(async genre => {
		const defaultMovies = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
		await fetchDefaultData(defaultMovies);
	});
};

const getCategoryData = async () => {
	// const categoryList = [ 'Action', 'Comedy', 'Documentary', 'Family', 'Horror', 'Romance', 'Science Fiction' ];
	const categoryId = [28, 35, 99, 10751, 27, 10749, 878];
	categoryId.forEach(async id => {
		const categoryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=6e6bbfd75ee71e1437638b9f37da8fd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;
		// await fetchCategoryData(categoryMovies);
	});
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