import {
  Header,
  mapStateToProps,
  mapDispatchToProps
} from './Header';
import {
  shallow
} from 'enzyme';
import React from 'react';
import {
  fetchSingleMovie
} from '../../utils/API/ApiFetch';

describe('Header', () => {
  describe('component', () => {
    let wrapper, instance;

    beforeEach(() => {
      wrapper = shallow( < Header / > );
      instance = wrapper.instance()
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    }); {
      /* it('should have a default state', () => {
          wrapper = shallow(< App getMovies={
            mockGetMovies
          }
            specificMovie={
              {
                title: 'title'
              }
            }
          />, { disableLifecycleMethods: true });
          expect(wrapper.state()).toEqual({
            genres: []
          }); */
    }
  });
  describe('mapStateToProps', () => {
    it('should return an object with the user and specificMovie', () => {
      const mockState = {
        user:
      }
      const expected = {
        user:
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a chooseMovie action when fetchSingleMovie is called', () => {
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