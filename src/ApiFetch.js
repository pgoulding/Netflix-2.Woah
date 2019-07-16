// import { getAllMovies } from './actions';
import apiKey from './apikey'

const getData = async () => {
  const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  try {
    const response = await fetch(nowPlaying);
    const parsed = await response.json()
    return parsed.results
  } catch (error) {
    throw Error(error.message);
  }
};

export default getData;