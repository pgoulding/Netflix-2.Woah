import {FavButton} from './FavButton';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser, mockMovie } from '../../utils/mockData/mockData';

describe('FavButton', () => {
	let wrapper, mockCurrentUserFavorites;

	beforeEach(() => {
		mockCurrentUserFavorites = [
			{ title: 'Toy Story', id: 1 },
			{ title: 'Toy Story2', id: 2 },
			{ title: 'Toy Story3', id: 3 }
		];
		wrapper = shallow(
			<FavButton 
				movieInfo={mockMovie} 
				user={mockUser.id} 
				currentUserFavorites={mockCurrentUserFavorites} />
		);
	});
	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//mstp
	//mdtp
});
