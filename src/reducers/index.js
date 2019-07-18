// import React from 'react';
import { combineReducers } from 'redux';
import { getDefaultMoviesReducer } from './getDefaultMoviesReducer';
// import FavoritesReducer from './FavoritesReducer';
import userReducer from './userReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { getMoviesByCategoryReducer } from './getMoviesByCategoryReducer'

const rootReducer = combineReducers({
	movies: getDefaultMoviesReducer,
	// favorites: FavoritesReducer,
	user: userReducer,
	isLoading: isLoadingReducer,
	throwError: throwErrorReducer,
	categories: getMoviesByCategoryReducer
});

export default rootReducer