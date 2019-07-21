// import React from 'react';
import { combineReducers } from 'redux';
import { getMoviesReducer } from './getMoviesReducer';
import userReducer from './UserReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { chooseGenreReducer } from './chooseGenreReducer';
import { searchTermReducer } from './searchTermReducer';
import { collectAllGenresReducer } from './collectAllGenresReducer';

const rootReducer = combineReducers({
  movies: getMoviesReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  throwError: throwErrorReducer,
  chosenGenre: chooseGenreReducer,
  searchTerm: searchTermReducer,
  allGenres: collectAllGenresReducer
});

export default rootReducer;
