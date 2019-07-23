import {
  MainGallery,
} from './Card';
import {
  shallow
} from 'enzyme';
import React from 'react';

describe('MainGallery', () => {
  describe('component', () => {
    let wrapper, instance;

    beforeEach(() => {
      wrapper = shallow( < MainGallery / > );
      instance = wrapper.instance()
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});