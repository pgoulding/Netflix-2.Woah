import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser } from '../../utils/mockData/mockData';

describe('Card', () => {
	describe('component', () => {
		let wrapper, instance;
		let mockMovieInfo = {
			title: 'Toy Story',
			poster_path: 'www.urkl.com',
			overview: 'A toy story',
			movie_id: 23,
			isFavorited: false
		};

		beforeEach(() => {
			wrapper = shallow(<Card movieInfo={mockMovieInfo} user={mockUser} />);
			instance = wrapper.instance();
		});
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
		it('should invoke seeSpecficMovie on click', () => {
			jest.spyOn(wrapper.instance(), 'seeSpecificMovie');
			wrapper.find('.view-details-btn').simulate('click');
			expect(instance.seeSpecificMovie).toHaveBeenCalled();
		});
		it('should invoke sendFavorite on click', () => {
			expect(wrapper.state('clicked')).toEqual(false);
			wrapper.find('.favorite-movie-btn').simulate('click');
			instance.sendFavorite();
			expect(wrapper.state('clicked')).toEqual(true);
		});
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
	});
});
