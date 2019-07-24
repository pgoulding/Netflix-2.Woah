import {
  Gallery,
  mapStateToProps
} from './Gallery';
import {
  shallow
} from 'enzyme';
import React from 'react';

describe('Gallery', () => {
  describe('component', () => {
    let wrapper, instance;

    beforeEach(() => {
      wrapper = shallow( < Gallery / > );
      instance = wrapper.instance()
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
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
        movies: ,
        user:
      }
      const expected = {
        movies: ,
        user:
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});