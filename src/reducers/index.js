// import React from 'react';
import { combineReducers } from 'redux';
import { getMoviesReducer } from './getMoviesReducer';
// import FavoritesReducer from './FavoritesReducer';
import userReducer from './UserReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
	movies: getMoviesReducer,
	// favorites: FavoritesReducer,
	user: userReducer,
	isLoading: isLoadingReducer,
	throwError: throwErrorReducer
});

export default rootReducer