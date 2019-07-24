import {
	GenreContainer,
	mapDispatchToProps
} from './GenreContainer';
import {
	shallow
} from 'enzyme';
import React from 'react';
import {
	mockGenre,
	mockGenres
} from '../../utils/mockData/mockData';
import {
	getMovies
} from '../../thunks/getMoviesThunk';

describe('GenreContainer', () => {
	let wrapper, instance, mockGenres, mockFindGenres;
	beforeEach(() => {
		mockFindGenres = jest.fn();
		wrapper = shallow( < GenreContainer / > );
		instance = wrapper.instance();
	});

	describe('component', () => {
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('populateGenres', () => {
		it('should return an array of links', () => {
			const result = instance.populateGenres();
			expect(result).toHaveLength(19);
		});
	});

	describe('CDM', () => {
		it('should invoke findGenres', () => {
			instance.componentDidMount();
			expect(mockFindGenres).toHaveBeenCalled();
		});
		it('should set state to genres', async () => {
			await instance.componentDidMount();
			expect(wrapper.state('genres')).toEqual(mockGenres);
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
	});
});