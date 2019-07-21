export const updateMovies = (movies, genre) => ({
	type: 'UPDATE_MOVIES',
	payload: {
		movies,
		genre
	}
});

export const collectAllGenres = (genres) => ({
	type: 'COLLECT_ALL_GENRES',
	payload: {
		genres
	}
});

export const chooseGenre = genre => ({
	type: 'CHOOSE_GENRE',
	payload: {
		genre
	}
});

export const searchTerm = term => ({
	type: 'SEARCH_TERM',
	payload: {
		term
	}
});

export const toggleFavorite = id => ({
	type: 'TOGGLE_FAVORITE',
	payload: {
		id
	}
});

export const signIn = ({ email, password, id, name }) => ({
	type: 'SIGN_IN',
	payload: {
		email,
		password,
		id,
		name
	}
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const createAccount = ({ name, password, email }) => ({
	type: 'CREATE_ACCOUNT',
	payload: {
		name,
		password,
		email
	}
});

export const throwError = error => ({
	type: 'THROW_ERROR',
	payload: {
		error
	}
});

export const isLoading = isLoading => ({
	type: 'IS_LOADING',
	payload: {
		isLoading
	}
});
