import apiKey from '../../apikey';
import { cleanMovies } from '../cleanerFunction';
import { newUserUrl, userSignInURL } from './apiUrls';

const getMovies = async (genre, url) => {
  let fetchUrl =
    url || `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
  try {
    const response = await fetch(fetchUrl);
    const parsed = await response.json();
    const cleaned = await cleanMovies(genre, parsed.results);
    return cleaned;
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
    throw Error('Failed to log in ', error.message);
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
    throw Error('Failed to create account ', error);
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
    console.log(response);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw Error('Failed to favorite', error);
  }
};

export { getMovies, sendNewAccount, sendUserLogin, sendFavorite };
