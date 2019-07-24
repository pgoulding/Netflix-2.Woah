import { Card } from './Card';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser } from '../../utils/mockData/mockData';


jest.mock('../../utils/API/ApiFetch');

describe('Card', () => {
	describe('component', () => {
		let wrapper, instance, mockSetFavorites, mockChooseSpecificMovie, mockFetchUserFavorites;
		let mockMovieInfo = {
			title: 'Toy Story',
			poster_path: 'www.urkl.com',
			overview: 'A toy story',
			movie_id: 23,
			isFavorited: false
		};
		let mockFavorite = [
			{
				title: 'Toy Story',
				poster_path: 'www.urkl.com',
				overview: 'A toy story',
				movie_id: 23,
				isFavorited: false
			},
			{
				title: 'Avengers',
				poster_path: 'www.urkl.com',
				overview: 'A hero story',
				movie_id: 24,
				isFavorited: false
			},
			{
				title: 'Planet Earth',
				poster_path: 'www.urkl.com',
				overview: 'A real story',
				movie_id: 25,
				isFavorited: true
			}
		];

		beforeEach(() => {
			mockFetchUserFavorites = jest.fn();
			mockChooseSpecificMovie = jest.fn();
			mockSetFavorites = jest.fn();
			wrapper = shallow(
				<Card
					movieInfo={mockMovieInfo}
					user={mockUser}
					chooseSpecificMovie={mockChooseSpecificMovie}
					setFavorites={mockSetFavorites}
				/>
			);
			instance = wrapper.instance();
		});
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});
});
