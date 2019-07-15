import React from 'react';
import {
	combineReducers
} from 'redux';
import MoviesReducer from './MoviesReducer';
import FavoritesReducer from './FavoritesReducer';
import UserSignInReducer from './UserSignInReducer';

export const rootReducer = combineReducers({
	movies: MoviesReducer,
	favorites: FavoritesReducer,
	signin: UserReducer
});