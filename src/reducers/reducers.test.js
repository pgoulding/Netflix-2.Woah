import { getMoviesReducer } from './getMoviesReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { userReducer } from './userReducer';
import * as action from '../actions';
import { chooseGenreReducer } from './chooseGenreReducer';
import { mockMovies, mockMovie, mockGenre, mockUser } from '../utils/mockData/mockData';
import { chooseSpecificMovieReducer } from './chooseSpecificMovieReducer';
import { toggleFavoritesReducer } from './toggleFavoritesReducer';

describe('reducers', () => {
	describe('chooseGenreReducer', () => {
		it('should return the initial state', () => {
			const expected = '';
			const result = chooseGenreReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should handle CHOOSE_GENRE', () => {
			const expected = mockGenre;
			const result = chooseGenreReducer(mockGenre, {
				type: 'CHOOSE_GENRE',
				payload: {
					genre: 'popular'
				}
			});
			expect(result).toEqual(expected);
		});
	});
	describe('chooseSpecificMovieReducer', () => {
		it('should return the initial state', () => {
			const expected = '';
			const result = chooseGenreReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should handle CHOOSE_MOVIE', () => {
			const expected = mockMovie;
			const result = chooseSpecificMovieReducer(mockMovie, {});
			expect(result).toEqual(expected);
		});
	});
	describe('getMoviesReducer', () => {
		it('should return the initial state', () => {
			const expected = {};
			const result = getMoviesReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		// it('should handle UPDATE_MOVIE', () => {
		// 	const expected = mockMovies;
		// 	const result = getMoviesReducer(mockMovie);
		// 	expect(result).toEqual(expected);
		// });unsure how to write this out
	});
	describe('toggleFavoritesReducer', () => {
		it('should return an initial state', () => {
			const expected = false;
			const result = toggleFavoritesReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should handle TOGGLE_FAVORITE', () => {
			const expected = false;
			const result = toggleFavoritesReducer(false, action.toggleFavorite(true));
			expect(result).toEqual(expected);
		});
	});
	describe('isLoadingReducer', () => {
		it('should return the initial state', () => {
			const expected = false;
			const result = isLoadingReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should handle IS_LOADING', () => {
			const expected = false;
			const result = isLoadingReducer(false, action.isLoading(true));
			expect(result).toEqual(expected);
		});
	});
	describe('throwErrorReducer', () => {
		it('should return the initial state', () => {
			const expected = '';
			const result = throwErrorReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should handle THROw_ERROR', () => {
			const expected = 'I am an error';
			const result = throwErrorReducer(undefined, action.throwError('I am an error'));
			expect(result).toEqual(expected);
		});
	});
	describe('userReducer', () => {
		it('should return the initial state', () => {
			const expected = {};
			const result = userReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should handle SIGN_IN', () => {
			const expected = mockUser;
			const result = userReducer(mockUser, mockUser.id);
			expect(result).toEqual(expected);
		});
		it('should handle SIGN_OUT', () => {
			const expected = {};
			const result = userReducer(mockUser, {
				type: 'SIGN_OUT'
			});
			expect(result).toEqual(expected);
		});
	});
});
