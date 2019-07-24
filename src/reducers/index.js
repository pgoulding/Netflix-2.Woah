import { combineReducers } from 'redux';
import { getMoviesReducer } from './getMoviesReducer';
import userReducer from './UserReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { chooseGenreReducer } from './chooseGenreReducer';
import { chooseSpecificMovieReducer } from './chooseSpecificMovieReducer';
import { searchQueryReducer } from './searchQueryReducer'
import { toggleFavoritesReducer } from './toggleFavoritesReducer';

const rootReducer = combineReducers({
  movies: getMoviesReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  throwError: throwErrorReducer,
  chosenGenre: chooseGenreReducer,
  specificMovie: chooseSpecificMovieReducer,
  searchQuery: searchQueryReducer,
  toggleFavorites: toggleFavoritesReducer
});

export default rootReducer;