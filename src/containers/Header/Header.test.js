import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';
import React from 'react';
import { mockUser } from '../../utils/mockData/mockData';
import { signOut } from '../../actions';

describe('Header', () => {
	describe('component', () => {
		let wrapper, instance;

		beforeEach(() => {
			wrapper = shallow(<Header />);
			instance = wrapper.instance();
		});
		it('should match snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('mapStateToProps', () => {
		it('should return an object with the user and specificMovie', () => {
			const mockState = {
				user: mockUser
			};

			const mappedProps = mapStateToProps(mockState);
			expect(mappedProps).toEqual(mockState);
		});
	});

	describe('mapDispatchToProps', () => {
		it('should call dispatch with a signOut action when signOut is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = signOut();
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.signOut();
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});

{
	/* test toggle menu, logout, and handleSignOut
  describe('getLoadingMovies', () => {
      it('should invoke getMovies', () => {
        instance.getLoadingMovies();
        expect(mockGetMovies).toHaveBeenCalled();
      })
    }) */
}
