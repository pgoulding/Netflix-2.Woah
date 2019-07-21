import { combineReducers } from 'redux';
import { getMoviesReducer } from './getMoviesReducer';
import userReducer from './UserReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { chooseGenreReducer } from './chooseGenreReducer';
import { chooseSpecificMovieReducer } from './chooseSpecificMovieReducer';

const rootReducer = combineReducers({
  movies: getMoviesReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  throwError: throwErrorReducer,
  chosenGenre: chooseGenreReducer,
  specificMovie: chooseSpecificMovieReducer
});

export default rootReducer;
