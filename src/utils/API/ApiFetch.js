import { newUserUrl, userSignInURL } from './apiUrls';
import apiKey from '../../apikey';
import { cleanMovies } from '../cleanerFunction';
// import { cleanMovies } from '../cleanMovies';

export const findGenres = async () => {
  const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(genreUrl);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error(error.message);
  }
};

export const fetchSingleGenre = async genreID => {
  const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`;
  try {
    const response = await fetch(genreUrl);
    const parsed = await response.json();
    const cleanedMovies = await cleanMovies(genreID, parsed.results);
    return cleanedMovies;
  } catch (error) {
    throw Error(error.message);
  }
};
export const searchForMovie = async searchTerm => {
  const genreUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
  try {
    const response = await fetch(genreUrl);
    const parsed = await response.json();
    const cleaned = cleanMovies(searchTerm, parsed.results);
    return cleaned;
  } catch (error) {
    throw Error(error.message);
  }
};

export const fetchSingleMovie = async movie_id => {
  const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(singleMovieUrl);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error(error.message);
  }
};

const sendUserLogin = async (email, password) => {
  const user = {
    email,
    password
  };
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };
    const response = await fetch(userSignInURL, options);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error(
      'Failed to log in; either your email or your password are incorrect. Please try again, or create a new account.',
      error
    );
  }
};

export const fetchUserFavorites = async id => {
  try {
    const response = await fetch(`${userSignInURL}${id}/favorites`);
    const parsed = await response.json();
    await console.log('favorites', parsed);
    return parsed;
  } catch (error) {
    throw Error('Cannot retrieve favorites at this time.', error);
  }
};

const sendNewAccount = async newAccount => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAccount)
    };
    const response = await fetch(newUserUrl, options);
    return response;
  } catch (error) {
    throw Error(
      'Sorry, we failed to create your account. Your email or password may already be in use. Please use a different email or password, or attempt to login, as you may already have an account.',
      error
    );
  }
};

const sendFavorite = async favoriteMovie => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favoriteMovie)
    };
    const response = await fetch(`${userSignInURL}favorites/new`, options);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Failed to favorite', error);
  }
};

export const deleteFavorite = async (user_id, movie_id) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(`${userSignInURL}${user_id}/favorites/${movie_id}`, options);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Failed to delete favorite', error);
  }
};

export { sendNewAccount, sendUserLogin, sendFavorite };
