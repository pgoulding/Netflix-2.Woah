import React from 'react';
import {
	Favorites,
	mapStateToProps
} from './Favorites';
import {
	shallow
} from 'enzyme';
import {
	mockUser,
	mockMovies
} from '../../utils/mockData/mockData';

describe('Favorites', () => {
			let wrapper;

			beforeEach(() => {
					wrapper = shallow( < Favorites user = {
							mockUser
						}
						/>);
					});

				it('should match snapshot', () => {
					expect(wrapper).toMatchSnapshot();
				});

				describe('mapStateToProps', () => {
					it('should return an object with a user and movies', () => {
						const mockState = {
							user: mockUser,
							movies: mockMovies
						};
						const mappedProps = mapStateToProps(mockState);
						expect(mappedProps).toEqual(mockState);
					});
				});
			});