import {
  DetailedMovieCard,
  mapStateToProps,
  mapDispatchToProps
} from './DetailedMovieCard';
import {
  shallow
} from 'enzyme';
import React from 'react';

describe('DetailedMovieCard', () => {
  describe('component', () => {
    let wrapper, instance;

    beforeEach(() => {
      wrapper = shallow( < DetailedMovieCard / > );
      instance = wrapper.instance()
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should invoke seeSpecficMovie on click', () => {
      expect(wrapper.state('clicked')).toEqual(false);
      wrapper.find('.view-details-btn').simulate('click');
      instance.seeSpecificMovie();
      expect(wrapper.state('clicked')).toEqual(true);
    });
    it('should invoke sendFavorite on click', () => {
      expect(wrapper.state('clicked')).toEqual(false);
      wrapper.find('.favorite-movie-btn').simulate('click');
      instance.sendFavorite();
      expect(wrapper.state('clicked')).toEqual(true);
    });
  });
  describe('mapStateToProps', () => {
    it('should return an object with the user and specificMovie', () => {
      const mockState = {
        user: ,
        specificMovie:
      }
      const expected = {
        user: ,
        specificMovie:
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a chooseMovie action when chooseSpecificMovie is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = chooseMovie('Toy Story', 1);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.chooseSpecificMovie('Toy Story', 1);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});