import * as actions from './index';

describe('Actions', () => {
  it('should have a type of GET_ALL_MOVIES', () => {
    const movies = [
      { id: 1, title: 'movie1' },
      { id: 2, title: 'movie2' },
      { id: 3, title: 'movie3' }
    ];
    const expectedAction = {
      type: 'GET_ALL_MOVIES',
      payload: {
        movies
      }
    };
    const result = actions.getAllMovies(movies);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SELECT_CATEGORY', () => {
    const category = 'Drama';
    const expectedAction = {
      type: 'SELECT_CATEGORY',
      payload: {
        category
      }
    };
    const result = actions.selectCategory(category);
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
    const userName = 'coolGui420';
    const password = 'ilikeburritos';
    const expectedAction = {
      type: 'SIGN_IN',
      payload: {
        userName,
        password
      }
    };
    const result = actions.signIn(userName, password);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SIGN_OUT', () => {
    const email = 'muscleWoman49@email.org';
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
    
  })
});
