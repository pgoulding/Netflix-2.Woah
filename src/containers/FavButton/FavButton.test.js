import {FavButton, mapDispatchToProps, mapStateToProps} from './FavButton';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser, mockMovie, mockMovies, mockFavorites } from '../../utils/mockData/mockData';
import {chooseMovie, setFavorites} from '../../actions';

describe('FavButton', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(
			<FavButton 
				movieInfo={mockMovie} 
				user={mockUser} 
				chooseSpecificMovie={mockMovie}
				setFavorites={mockMovies} />
		);
		instance = wrapper.instance()
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('mapStateToProps', () => {
		it('should return an object with the user and specificMovie', () => {
			const mockState = {
				user: mockUser,
				specificMovie: mockMovie
			};
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual(mockState);
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with a chooseMovie action when chooseSpecificMovie is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = chooseMovie(mockMovie.title, mockMovie.id);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.chooseSpecificMovie(mockMovie.title, mockMovie.id);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
		it('should call dispatch with a setFavorites action when setFavorites is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = setFavorites(mockFavorites);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.setFavorites(mockFavorites);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
