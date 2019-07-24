import {
	DetailedMovieCard,
	mapStateToProps,
	mapDispatchToProps
} from './DetailedMovieCard';
import {
	shallow
} from 'enzyme';
import React from 'react';
import {
	fetchSingleMovie
} from '../../utils/API/ApiFetch';
import {mockMovie} from '../../utils/mockData/mockData';

jest.mock('../../utils/API/ApiFetch');

describe('DetailedMovieCard', () => {
		let wrapper, instance;

		beforeEach(() => {
			wrapper = shallow( < DetailedMovieCard specificMovie={mockMovie}/> );
			instance = wrapper.instance();
		});
		it('should match snapshot', () => {
	describe('component', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});
	describe('CDM', () => {
		it('should invoke fetchSingleMovie', () => {
			instance.componentDidMount();
			expect(fetchSingleMovie).toHaveBeenCalledWith(mockMovie.id);
		});

		it('should set state to currentMovie', async () => {
			await instance.componentDidMount();
			expect(wrapper.state('currentMovie')).toEqual();
		});
		describe('mapStateToProps', () => {
			it('should return an object with the user and specificMovie', () => {
				const mockState = {
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
			it('should call dispatch with a fetchSingleMovie action when fetchSingleMovie is called', () => {
				const mockDispatch = jest.fn();
				const actionToDispatch = fetchSingleMovie(1);
				const mappedProps = mapDispatchToProps(mockDispatch);
				mappedProps.fetchSingleMovie(1);
				expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
			});
		});
	});
});