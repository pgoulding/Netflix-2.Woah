import Genre from './Genre';
import { shallow } from 'enzyme';
import React from 'react';
import { fetchSingleGenre } from '../../utils/API/ApiFetch';


jest.mock('../../utils/API/ApiFetch');

describe('Genre', () => {
	let wrapper, instance, mockGenre, mockState;
	beforeEach(() => {
		mockGenre = {id: 4, name: 'popular'}
		wrapper = shallow(<Genre genre={mockGenre}/>);
		instance = wrapper.instance();
	});

	describe('component', () => {
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('CDM', () => {
		it('should invoke fetchSingleGenre', async () => {
			await instance.componentDidMount();
			expect(fetchSingleGenre).toHaveBeenCalled();
		});

		it('should set state to genres', async () => {
			await instance.componentDidMount();
			expect(wrapper.state('genreMovies')).toEqual();
		});
	});
});
