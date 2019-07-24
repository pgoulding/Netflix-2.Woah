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
import { findGenres } from '../../utils/API/ApiFetch';

jest.mock('../../utils/API/ApiFetch')
jest.mock('../../thunks/getMoviesThunk')

describe('GenreContainer', () => {
	let wrapper, instance, mockGenres;
	beforeEach(() => {
		wrapper = shallow( < GenreContainer /> );
		instance = wrapper.instance();
	});

	describe('component', () => {
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('CDM', () => {
		it('should invoke findGenres', async () => {
			await instance.componentDidMount();
			expect(findGenres).toHaveBeenCalled();
		});
		it('should set state to genres', async () => {
			await instance.componentDidMount();
			expect(wrapper.state('genres')).toBeInstanceOf(Array);
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