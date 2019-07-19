// import { getDefaultMovies } from './actions';
import apiKey from '../../apikey';
import { cleanDefaultCategories } from '../cleanerFunction';
import { newUserUrl, userSignInURL } from './apiUrls';
//import nowPlaying url and move url to apiurls file

const getMoviesByCategory = async (genre, url) => {
  let fetchUrl = url || `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
  try {
    const response = await fetch(fetchUrl);
    const parsed = await response.json();
    const cleaned = await cleanDefaultCategories(genre, parsed.results);
    return cleaned;
  } catch (error) {
    throw Error(error.message);
  }

  // const movieList = ['now_playing', 'popular', 'top_rated']
  // return Promise.all(movieList.map(async genre => {
  //   try {
  //     const nowPlaying = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
  //     const response = await fetch(nowPlaying);
  //     const parsed = await response.json()
  //     const cleaned = await cleanDefaultCategories(genre, parsed.results)
  //     return cleaned
  //   } catch (error) {
  //     throw Error(error.message);
  //   }
  // }))
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
    throw Error('Failed to log in ', error.message)
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
    }
    const response = await fetch(`${userSignInURL}favorites/new`, options)
    console.log(response)
    const parsed = await response.json()
    return parsed
  } catch (error) {
    throw Error('Failed to favorite', error);
  }
};

export { getMoviesByCategory, sendNewAccount, sendUserLogin, sendFavorite };
