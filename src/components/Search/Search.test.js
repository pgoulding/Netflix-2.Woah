import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
	let wrapper, instance;

	beforeEach(() => {
		wrapper = shallow(<Search />);
		instance = wrapper.instance();
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});

// should handleChange
