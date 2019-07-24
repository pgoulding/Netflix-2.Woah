import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser } from '../../utils/mockData/mockData';
import { chooseMovie, setFavorites } from '../../actions';
import { fetchUserFavorites, sendFavorite, deleteFavorite } from '../../utils/API/ApiFetch';

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
			// mockFetchUserFavorites = jest.fn().mockImplementation(() => Promise.resolve());
			// fetchUserFavorites.mockImplementation(() => Promise.resolve({}));
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
		it('should invoke chooseSpecficMovie on click of seeSpecificMovie button', () => {
			wrapper.find('.specific-movie-btn').simulate('click');
			expect(mockChooseSpecificMovie).toHaveBeenCalledWith(mockMovieInfo.title, mockMovieInfo.movie_id);
		});
		// it('should invoke fetchUserFavorite on click of toggle-fav-btn if the user id is passed', () => {
		// 	wrapper.find('.toggle-fav-btn').simulate('click');
		// 	expect(mockFetchUserFavorites).toHaveBeenCalledWith(mockUser.id);
		// });
		// it('should invoke setFavorites on click of toggle-fav-btn if the user id is passed', () => {
		// 	expect(mockSetFavorites).toHaveBeenCalledWith(mockFavorite);
		// });
		// it('should invoke deleteFavorites if the foundMovie is passed on click of toggle-fav-btn', () => {
		// 	wrapper.find('.toggle-fav-btn').simulate('click');
		// 	expect(mockDeleteFavorite).toHaveBeenCalledWith(mockUser.id, mockMovie.movie_id);
		// });
		// it('should invoke sendFavorites if the foundMovie is not passed on click of toggle-fav-btn', () => {
		// 	wrapper.find('.toggle-fav-btn').simulate('click');
		// 	expect(mockSendFavorites).toHaveBeenCalledWith(mockMovieInfo, mockUser.id);
		// });
	});
	describe('mapStateToProps', () => {
		it('should return an object with the user and specificMovie', () => {
			const mockState = {
				user: {
					email: 'abc@email.com',
					password: 'password',
					id: 1,
					name: 'jarry'
				},
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
		it('should call dispatch with a chooseMovie action when chooseSpecificMovie is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = chooseMovie('Toy Story', 1);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.chooseSpecificMovie('Toy Story', 1);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
		it('should call dispatch with a setFavorites action when setFavorites is called', () => {
			const mockDispatch = jest.fn();
			const mockFavorites = [
				{
					movie: 'Toy Story'
				},
				{
					movie: 'Avengers'
				},
				{
					movie: 'Ice Age'
				}
			];
			const actionToDispatch = setFavorites(mockFavorites);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.setFavorites(mockFavorites);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
