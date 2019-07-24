import Error from './Error';
import {
	shallow
} from 'enzyme';
import React from 'react';

describe('Error', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow( < Error / > );
	});
	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});