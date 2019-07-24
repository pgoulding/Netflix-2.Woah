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
            it('should have a default state', () => {
                wrapper = shallow( < App getMovies = {
                    mockGetMovies
                  }
                  specificMovie = {
                    {
                      title: 'title'
                    }
                  }
                  />, { disableLifecycleMethods: true });
                  expect(wrapper.state()).toEqual({
                    genres: []
                  });
                }); describe('mapStateToProps', () => {
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
              }); describe('mapDispatchToProps', () => {
                it('should call dispatch with a chooseMovie action when chooseSpecificMovie is called', () => {
                  const mockDispatch = jest.fn();
                  const actionToDispatch = chooseMovie('Toy Story', 1);
                  const mappedProps = mapDispatchToProps(mockDispatch);
                  mappedProps.chooseSpecificMovie('Toy Story', 1);
                  expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
                });
              });
            });

          {
            /* fix for usermenu */ }