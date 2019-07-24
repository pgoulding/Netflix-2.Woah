import {
  UserLogin,
  mapStateToProps,
  mapDispatchToProps
}
from './UserLogin';
import {
  shallow
} from 'enzyme';
import React from 'react';
import {mockUser, mockMovies} from '../../utils/mockData/mockData';

describe('UserLogin', () => {
      describe('component', () => {
        let wrapper, instance, mockFavorites;

        beforeEach(() => {
          mockFavorites = mockMovies
          wrapper = shallow( < UserLogin user={mockUser}/> );
          instance = wrapper.instance()
        });

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });

        it('should have a default state', () => {
          wrapper = shallow( <UserLogin user={mockUser}/> , {
              disableLifecycleMethods: true
            }
          );
          expect(wrapper.state()).toEqual({
            name: '',
      password: '',
      email: '',
      error: ''
          });
        });

        describe('mapStateToProps', () => {
          it('should return an object with the user, movies and userFavorites', () => {
            const mockState = {
              user: mockUser,
              movies: mockMovies,
              userFavorites: mockFavorites
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(mockState);
          });
        });

        describe('mapDispatchToProps', () => {
          it('should call dispatch with a signIn action when signIn is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = signIn(mockResults);
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.signIn(mockResults);
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });

          it('should call dispatch with a setFavorites action when setFavoritesis called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = setFavorites(mockFavorites);
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.setFavorites(mockFavorites);
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });  
        });
      });
    });