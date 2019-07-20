import {
  fetchDefaultData
} from './fetchDefaultData';
import {
  isLoading,
  throwError,
  getAllMovies
} from '../../actions'

describe('fetchDefualtData', () => {
  let mockUrl
  let mockMovies
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockMovie = [{
        title: 'Avatar',
        poster: 'www.someimage.com'
      },
      {
        title: 'Star Wars',
        poster: 'www.someimage.com'
      }
    ]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        movie: mockMovie
      })
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = fetchDefaultData(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', () => {
    const thunk = fetchDefaultData(mockUrl)

    thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
  it('should dispatch throwError with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'There is an error'
    }))

    const thunk = fetchDefaultData(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(throwError('There is an error'))
  })
  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = fetchDefaultData(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

})