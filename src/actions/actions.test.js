import * as actions from './index';
import * as mockData from '../utils/mockData';

describe('Actions', () => {
  it('should have a type of UPDATE_MOVIES and a payload of an object of movies', () => {
    const expectedAction = {
      type: 'UPDATE_MOVIES',
      payload: {
        movies: mockData.mockMovies,
        genre: mockData.mockGenre
      }
    };
    const result = actions.updateMovies(mockData.mockMovies, mockData.mockGenre);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CHOOSE_GENRE and a payload of a string of the movie genre', () => {
    const expectedAction = {
      type: 'CHOOSE_GENRE',
      payload: {
        genre: mockData.mockGenre
      }
    }
    const result = actions.chooseGenre(mockData.mockGenre);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CHOOSE_MOVIE and a payload of title and id ', () => {
    const expectedAction = {
      type: 'CHOOSE_MOVIE',
      payload: {
        title: mockData.mockMovie.title,
        id: mockData.mockMovie.id
      }
    }
    const result = actions.chooseMovie(mockData.mockMovie.title, mockData.mockMovie.id);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_FAVORITE and a payload of id', () => {
    const id = 1;
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      payload: {
        id: mockData.mockMovie.id
      }
    };
    const result = actions.toggleFavorite(mockData.mockMovie.id);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_IN', () => {
    const expectedAction = {
      type: 'SIGN_IN',
      payload: {
        user: mockData.mockUser
      }
    };
    const result = actions.signIn(mockData.mockUser);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_OUT', () => {
    const expectedAction = {
      type: 'SIGN_OUT',
      payload: undefined
    };
    const result = actions.signOut();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of THROW_ERROR', () => {
    const expectedAction = {
      type: 'THROW_ERROR',
      payload: {
        error: mockData.mockError
      }
    }
    const result = actions.throwError(mockData.mockError);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      payload: {
        isLoading: mockData.mockLoading
      }
    }
    const result = actions.isLoading(mockData.mockLoading);
    expect(result).toEqual(expectedAction);
  })
});