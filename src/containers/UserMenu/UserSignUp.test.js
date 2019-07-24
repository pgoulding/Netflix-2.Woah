mport {
  DetailedMovieCard,
  mapStateToProps,
  mapDispatchToProps
}
from './DetailedMovieCard';
import {
  shallow
} from 'enzyme';
import React from 'react';
import {
  fetchSingleMovie
} from '../../utils/API/ApiFetch';

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
      });
      describe('CDM', () => {
        it('should invoke fetchSingleMovie', () => {
          instance.componentDidMount();
          expect(fetchSingleMovie).toHaveBeenCalled()
        });
        it('should set state to currentMovie', async () => {
          await instance.componentDidMount()
          expect(wrapper.state('currentMovie')).toEqual()
        });
        describe('mapStateToProps', () => {
          it('should return an object with the user and specificMovie', () => {
            const mockState = {
              specificMovie:
            }
            const expected = {
              specificMovie:
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);
          });
        });
        describe('mapDispatchToProps', () => {
          it('should call dispatch with a chooseMovie action when fetchSingleMovie is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = fetchSingleMovie(1);
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.chooseSpecificMovie(1);
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });
        });
      });

      {
        /* test initial state, handlechange, createnewaccount, clearinputfields */ }