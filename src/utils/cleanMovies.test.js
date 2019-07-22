import {
  cleanMovies
} from './cleanMovies';

describe('cleanMovies', () => {
  it('should return a cleaned movie', () => {
    const cleanMovie = {
      movie_id: 420818,
      isFavorited: false,
      gnere: "popular",
      poster_path: "http://image.tmdb.org/t/p/w300\/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      backdrop_path: "http://image.tmdb.org/t/p/original\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg"
    }
    const expected = cleanMovie(mockMovie);
    expect(cleanMovie).toEqual(expected);
  })
})