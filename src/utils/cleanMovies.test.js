import {
  cleanMovies
} from './cleanMovies';
import {
  mockMovie,
  mockGenre
} from '../utils/mockData/mockData';

describe('cleanMovies', () => {
  it('should return a cleaned movie', () => {
    const expected = [{
      ...mockMovie,
      genre: mockGenre,
      movie_id: mockMovie.id,
      isFavorited: false,
      poster_path: `http://image.tmdb.org/t/p/w300${mockMovie.poster_path}`,
      backdrop_path: `http://image.tmdb.org/t/p/original${mockMovie.backdrop_path}`
    }]
    const result = cleanMovies(mockGenre, [mockMovie]);
    expect(result).toEqual(expected);
  })
})