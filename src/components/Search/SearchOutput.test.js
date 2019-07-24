import React from 'react';
import { shallow } from 'enzyme';
import { SearchOutput } from './SearchOutput';

describe('SearchOutput', () => {
	let wrapper, instance, mockQuery;

	beforeEach(() => {
		mockQuery = [ 'Toy Story', 'Avengers' ];
		wrapper = shallow(<SearchOutput query={mockQuery} />);
		instance = wrapper.instance();
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
