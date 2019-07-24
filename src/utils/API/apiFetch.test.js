import * as ApiFetch from './ApiFetch';
import apiKey from '../../apikey';
import * as mockData from '../mockData/mockData';
import cleanMovies from '../cleanMovies';

describe('ApiFetch', () => {
  const mockPromiseError = 'response.json is not a function';

  describe('findGenres', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockGenre)
        })
      );
    });
    it('should call the fetch with the correct arguements', async () => {
      const mockUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      await ApiFetch.findGenres(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);

    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.findGenres();
      expect(expected).toEqual(mockData.mockGenre);
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.findGenres()).rejects.toEqual(Error(mockPromiseError));
    });
  });

  describe('fetchSingleGenre', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            results: mockData.mockGenre //don't know value
          })
        })
      );
    });
    it('should call the fetch with the correct arguements', async () => {
      const mockUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${mockData.mockGenre}`
      await ApiFetch.fetchSingleGenre(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
      //need to mock out props
    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.fetchSingleGenre();
      expect(expected).toEqual(mockData.mockGenre);
    });
    it('should invoke cleanMovies with genreId and results', async () => {
      const expected = [] //make clean version
      const result = cleanMovies(mockData.mockMovies)
      expect(result).toEqual(expected)
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.fetchSingleGenre()).rejects.toEqual(Error(mockPromiseError));
    });
  });

  describe('searchForMovie', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockMovie)
        })
      );
    });
    it('should call the fetch with the correct arguements', async () => {
      const mockSearchTerm = 'Toy Story'
      const mockUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${mockSearchTerm}&page=1&include_adult=false`
      await ApiFetch.searchForMovie(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
      //need to mock out props
    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.searchForMovie();
      expect(expected).toEqual(mockData.mockMovie);

    });
    it('should invoke cleanMovies with results and searchTerm', () => {
      //invoke window.fetch with dirty data and expect whole function to return clean data
      // await cleanMovies()
      // expect(window.fetch).toHaveBeenCalledWith()
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.searchForMovie()).rejects.toEqual(Error(mockPromiseError));

    });
  });

  describe('fetchSingleMovie', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockMovie)
        })
      );
    });
    it('should call the fetch with the correct arguements', async () => {
      const mockMovieId = `https://api.themoviedb.org/3/movie/1234?api_key=${apiKey}d5&language=en-US`;
      const mockUrl = `https://api.themoviedb.org/3/movie/${mockMovieId}?api_key=${apiKey}&language=en-US`
      await ApiFetch.fetchSingleMovie(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    });
    it('should return a parsed version of the result', () => {
      async () => {
        const expected = await ApiFetch.fetchSingleMovie();
        expect(expected).toEqual(mockData.mockMovie);
      }
    });
    it('should throw an error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.fetchSingleMovie()).rejects.toEqual(Error(mockPromiseError));
    });
  });

  describe('sendUserLogin', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockUser)
        })
      );
    });
    it('should call the fetch with the correct arguements', async () => {
      const mockMovieId = `https://api.themoviedb.org/3/movie/1234?api_key=${apiKey}d5&language=en-US`;
      const mockUrl = `https://api.themoviedb.org/3/movie/${mockMovieId}?api_key=${apiKey}&language=en-US`
      await ApiFetch.fetchSingleMovie(mockUrl, mockData.mockPost);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockData.mockPost);
    });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.sendUserLogin();
      expect(expected).toEqual(mockData.mockUser, mockData.mockPost);
      //double check what it should equal
    });
    it('should throw an error if fetch fails', async () => {
      const mockUserError = 'Failed to log in; either your email or your password are incorrect. Please try again, or create a new account.'
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.sendUserLogin()).rejects.toEqual(Error(mockUserError));
    });
  });

  describe('sendNewAccount', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockUser)
        })
      );
    });
    // it('should call the fetch with the correct arguements', () => {});
    it('should return a parsed version of the result', () => {
      async () => {
        const expected = await ApiFetch.sendNewAccount();
        expect(expected).toEqual(mockData.mockUser);
      }
    });
    // it('should throw an error if fetch fails', async () => {
    //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    //     ok: false
    //   }))
    //   await expect(ApiFetch.sendNewAccount()).rejects.toEqual(Error(mockPromiseError));

    // }); resolving instead of rejecting
  });

  describe('sendFavorite', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData.mockMovie)
        })
      );
    });
    //need to make sure mock movies has isFavorited
    // it('should call the fetch with the correct arguements', () => {

    // });
    it('should return a parsed version of the result', async () => {
      const expected = await ApiFetch.sendFavorite();
      expect(expected).toEqual(mockData.mockMovie);
      //check what it should equal
    });
    it('should throw an error if fetch fails', async () => {
      const mockFavoriteError = 'Failed to favorite';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(ApiFetch.sendFavorite()).rejects.toEqual(Error(mockFavoriteError));
    });
  });
})