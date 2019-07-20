import * as actions from './index';

const email = 'happy@sad.com';
const password = 'ilikeburritos';
const id = 2;
const name = 'coolGui420';

describe('Actions', () => {
  it('should have a type of UPDATE_MOVIES', () => {
    const movies = [{
        id: 1,
        title: 'movie1'
      },
      {
        id: 2,
        title: 'movie2'
      },
      {
        id: 3,
        title: 'movie3'
      }
    ];
    const genre = 'popular'

    const expectedAction = {
      type: 'GET_ALL_MOVIES',
      payload: {
        movies,
        genre
      }
    };
    const result = actions.getDefaultMovies(movies, genre);
    expect(result).toEqual(expectedAction);
  });


  it('should have a type of TOGGLE_FAVORITE', () => {
    const id = 1;
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      payload: {
        id
      }
    };
    const result = actions.toggleFavorite(id);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_IN', () => {
    const expectedAction = {
      type: 'SIGN_IN',
      payload: {
        email,
        password,
        id,
        name,
      }
    };
    const result = actions.signIn(email, password, id, name);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_OUT', () => {
    const expectedAction = {
      type: 'SIGN_OUT',
      payload: {
        email
      }
    };
    const result = actions.signOut(email);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CREATE_ACCOUNT', () => {
    const expectedAction = {
      type: 'CREATE_ACCOUNT',
      payload: {
        name,
        password,
        email
      }
    };
    const result = actions.createAccount(name, password, email);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of THROW_ERROR', () => {
    const error = 'Cannot load content';
    const expectedAction = {
      type: 'THROW_ERROR',
      payload: {
        error
      }
    }
    const result = actions.throwError(error);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const isLoading = false;
    const expectedAction = {
      type: 'IS_LOADING',
      payload: {
        isLoading
      }
    }
    const result = actions.isLoading(isLoading);
    expect(result).toEqual(expectedAction);
  })
});