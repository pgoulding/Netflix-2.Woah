export const mockMovies = {
  popular: {
    "id": 420818,
    "video": false,
    "vote_average": 7.1,
    "title": "The Lion King",
    "popularity": 636.278,
    "poster_path": "\/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
    "original_language": "en",
    "original_title": "The Lion King",
    "genre_ids": [
      12,
      16,
      10751,
      18,
      28
    ],
    "backdrop_path": "\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
    "adult": false,
    "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    "release_date": "2019-07-12"
  }
};

export const mockMovie = {
  "id": 420818,
  "title": "The Lion King",
  "poster_path": "\/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg"
}

export const mockUser = {
  email: 'happy@sad.com',
  password: 'ilikeburritos',
  id: 2,
  name: 'coolGui420'
}

export const mockGenre = 'popular';

export const mockPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: mockUser
  })
}

export const mockLoading = false;

export const mockError = 'Something went wrong'

export const mockState = {
  movies: mockMovies,
  user: mockUser,
  isLoading: mockLoading,
  throwError: mockError,
  chosenGenre: mockGenre,
  specificMovie: mockMovie
}