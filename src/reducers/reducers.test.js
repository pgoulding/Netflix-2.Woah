import {
	getMoviesReducer
} from './getMoviesReducer';
import {
	isLoadingReducer
} from './isLoadingReducer';
import {
	throwErrorReducer
} from './throwErrorReducer';
import {
	userReducer
} from './userReducer';
import * as actions from '../actions';
import {
	chooseGenreReducer
} from './chooseGenreReducer';
import * as mockData from '../utils/mockData/mockData';
import {
	chooseSpecificMovieReducer
} from './chooseSpecificMovieReducer';

describe('reducers', () => {
	describe('chooseGenreReducer', () => {
		it('should return the initial state', () => {
			const expected = '';
			const result = chooseGenreReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should return a genre', () => {
			const expected = mockData.mockGenre;
			const result = chooseGenreReducer(mockData.mockGenre);
			expect(result).toEqual(expected);
		})
	});
	describe('chooseSpecificMovieReducer', () => {
		it('should return the initial state', () => {
			const expected = '';
			const result = chooseGenreReducer(undefined, {});
			expect(result).toEqual(expected);
		});
		it('should return a  movie', () => {
			const expected = mockData.mockMovie;
			const result = chooseSpecificMovieReducer(mockData.mockMovie, {});
			expect(result).toEqual(expected);
		});
	});
	describe('getMoviesReducer', () => {
		it('should return the initial state', () => {
			const expected = {};
			const results = getMoviesReducer(undefined, {});
			expect(results).toEqual(expected);
		});
		it('should return state with a new movie', () => {});
		it('should toggle the favorite status of a movie', () => {});
	});
	describe('isLoadingReducer', () => {
		it('should return the initial state', () => {
			const expected = false;
			const results = isLoadingReducer(undefined, {});
			expect(results).toEqual(expected);
		});
		it('should toggle the loading status', () => {
			const expected = false;
			const results = throwErrorReducer(true, action.isLoading(false));
			expect(results).toEqual(expected);
		});
	});
	describe('throwErrorReducer', () => {
		it('should return the initial state', () => {
			const expected = '';
			const results = throwErrorReducer(undefined, {});
			expect(results).toEqual(expected);
		});
		it('should throw an error', () => {
			const expected = 'I am an error';
			const results = throwErrorReducer(undefined, action.throwError('I am an error'));
			expect(results).toEqual(expected);
		});
	});
	describe('userReducer', () => {
		it('should return the initial state', () => {
			const expected = {};
			const results = userReducer(undefined, {});
			expect(results).toEqual(expected);
		});
		it('should', () => {
			//sign in
		});
		it('should', () => {
			//sign out
		});
	});
});