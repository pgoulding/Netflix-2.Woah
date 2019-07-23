import React from 'react';
import {
  shallow
} from 'enzyme';
import {
  Search
} from './Search';
import {
  findGenres
} from '../../utils/API/ApiFetch';
import {
  getMovies
} from '../../thunks/getMoviesThunk';

jest.mock("../../utils/API/ApiFetch");

describe('Search', () => {
      let wrapper, instance, mockGetMovies;
      mockGetMovies = jest.fn().mockImplementation(() => Promise.resolve())
      findGenres.mockImplementation(() => Promise.resolve({
        genres: ['romance']
      }))


      beforeEach(() => {
          wrapper = shallow( < App getMovies = {
              mockGetMovies
            }
            specificMovie = {
              {
                title: 'title'
              }
            }
            />);
            instance = wrapper.instance();
          });

        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot()
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
            }); describe('getLoadingMovies', () => {
            it('should invoke getMovies', () => {
              instance.getLoadingMovies();
              expect(mockGetMovies).toHaveBeenCalled();
            })
          })
        })

      // should handleChange