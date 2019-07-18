// import React from 'react';
import { combineReducers } from 'redux';
import { MoviesReducer }from './MoviesReducer';
// import FavoritesReducer from './FavoritesReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
	movies: MoviesReducer,
	// favorites: FavoritesReducer,
	user: UserReducer
});

export default rootReducer