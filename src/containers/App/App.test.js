import React from 'react';
import {
	shallow
} from 'enzyme';
import {
	App,
	mapStateToProps,
	mapDispatchToProps
} from './App';
import {
	findGenres
} from '../../utils/API/ApiFetch';
import {
	getMovies
} from '../../thunks/getMoviesThunk';
import {
	mockMovies,
	mockGenre
} from '../../utils/mockData/mockData';
import {
	updateMovies
} from '../../actions';

jest.mock('../../utils/API/ApiFetch');
jest.mock('../../thunks/getMoviesThunk');

describe('App', () => {
	let wrapper, instance, mockGetMovies;
	mockGetMovies = jest.fn().mockImplementation(() => Promise.resolve());
	findGenres.mockImplementation(() =>
		Promise.resolve({
			genres: ['romance']
		})
	);

	beforeEach(() => {
		wrapper = shallow( <App getMovies = {
				mockGetMovies
			}
			specificMovie = {
				{
					title: 'title'
				}
			}/>
		);
		instance = wrapper.instance();
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have a default state', () => {
		wrapper = shallow( <
			App getMovies = {
				mockGetMovies
			}
			specificMovie = {
				{
					title: 'title'
				}
			}
			/>, {
				disableLifecycleMethods: true
			}
		);
		expect(wrapper.state()).toEqual({
			genres: []
		});
	});

	describe('CDM', () => {
		it('should invoke getLoadingMovies', () => {
			jest.spyOn(instance, 'getLoadingMovies');
			instance.componentDidMount();
			expect(instance.getLoadingMovies).toHaveBeenCalled();
		});
		it('should invoke findGenres', () => {
			instance.componentDidMount();
			expect(findGenres).toHaveBeenCalled();
		});
		it('should set state to genres', async () => {
			await instance.componentDidMount();
			expect(wrapper.state('genres')).toEqual(['romance']);
		});
	});

	describe('getLoadingMovies', () => {
		it('should invoke getMovies', () => {
			instance.getLoadingMovies();
			expect(mockGetMovies).toHaveBeenCalled();
		});
	});

	describe('mapStateToProps', () => {
		it('should return an object with movies and specificMovie', () => {
			const mockState = {
				movies: mockMovies,
				specificMovie: {
					title: 'mockTitle',
					id: 1
				}
			};
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual(mockState);
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with a getMovies action when getMovies is called', () => {
			const mockDispatch = jest.fn();
			const mockUrl = 'www.someurl.com';
			const actionToDispatch = getMovies(mockGenre, mockUrl);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.getMovies(mockGenre, mockUrl);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
		it('should call dispatch with a updateMovie action when updateMovieState is called', () => {
			const mockDispatch = jest.fn();
			const mockResults = mockMovies;
			const actionToDispatch = updateMovies(mockResults, mockGenre);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.updateMovieState(mockResults, mockGenre);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
