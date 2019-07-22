import {
  getMoviesThunk
} from './getMoviesThunk';
import {
  mockGenre
} from '../utils/mockData/mockData';
import {
  isLoading,
  throwError,
  updateMovies
} from '../actions';
import ApiFetch from '../utils/API/ApiFetch';

describe('getMovieThunk', () => {
  let mockUrl, mockDispatch, thunk;

  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    thunk = getMoviesThunk(mockUrl, mockGenre)
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        movie: mockData.mockMovie
      })
    }))
  });

  it('calls dispatch when Loading', () => {
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', () => {
    thunk(mockDispatch)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
  it('should dispatch throwError with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'There is an error'
    }))
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(throwError('There is an error'))
  })

  //need to make test for parsed response, cleaned data, and that movies was update - updateMovies
  it('should dispatch and not load if the response is ok', async () => {
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
});