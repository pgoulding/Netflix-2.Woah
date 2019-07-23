import {
  Card,
  mapStateToProps,
  mapDispatchToProps
} from './Card';
import {
  shallow
} from 'enzyme';
import React from 'react';

describe('Card', () => {
  describe('component', () => {
    let wrapper, instance;

    beforeEach(() => {
      wrapper = shallow( < Card / > );
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

    });
  });
  describe('mapDispatchToProps', () => {
    it('should', () => {

    });
  });
});