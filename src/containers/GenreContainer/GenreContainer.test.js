import {
	GenreContainer,
	mapDispatchToProps
} from './GenreContainer';
import {
	shallow
} from 'enzyme';
import React from 'react';

describe('GenreContainer', () => {
	let wrapper, instance;
	beforeEach(() => {
		wrapper = shallow( < GenreContainer / > );
		instance = wrapper.instance();
	});

	describe('component', () => {
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('populateGenres', () => {
		it('should return an array of links', () => {
			const result = instance.populateGenres();
			expect(result).toHaveLength(19);
		});
	});

	describe('CDM', () => {
		it('should invoke findGenres', () => {
			instance.componentDidMount();
			expect(findGenres).toHaveBeenCalled();
		});
		it('should set state to genres', async () => {
			await instance.componentDidMount();
			expect(wrapper.state('genres')).toEqual(mockGenres);
		});
	});
});