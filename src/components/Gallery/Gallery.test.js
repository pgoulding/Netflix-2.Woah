import { Gallery, mapStateToProps } from './Gallery';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser, mockMovies, mockGenre, mockMovie } from '../../utils/mockData/mockData';

describe('Gallery', () => {
	describe('component', () => {
		let wrapper, instance, dataMock, mockSendFavorite;
		dataMock = [ { title: 'Toy Story', id: 1 }, { title: 'Toy Story2', id: 2 }, { title: 'Toy Story3', id: 3 } ];

		beforeEach(() => {
			mockSendFavorite = jest.fn();
			wrapper = shallow(<Gallery data={dataMock} genre={mockGenre} user={mockUser} />);
			instance = wrapper.instance();
		});
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
		// it('should invoke sendFavorite on click', () => {
		// 	wrapper.find('.send-favorite-btn').simulate('click');
		// 	expect(mockSendFavorite).toHaveBeenCalledWith(mockMovie, mockUser.id);
		// });
	});
	describe('mapStateToProps', () => {
		it('should return an object with the user and specificMovie', () => {
			const mockState = {
				movies: mockMovies,
				user: mockUser
			};
			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual(mockState);
		});
	});
});
