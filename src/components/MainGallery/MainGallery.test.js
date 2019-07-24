import { MainGallery } from './MainGallery';
import { shallow } from 'enzyme';
import React from 'react';
import { mockMovies } from '../../utils/mockData/mockData';

describe('MainGallery', () => {
	describe('component', () => {
		let wrapper, instance;

		beforeEach(() => {
			wrapper = shallow(<MainGallery movies={[mockMovies]} />);
			instance = wrapper.instance();
		});
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});
});
