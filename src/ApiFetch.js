// import { getAllMovies } from './actions';
import apiKey from './apikey'
import {
  cleanDefaultCategories
} from './utils/cleanerFunction'

const getDefaultData = async () => {
  const movieList = ['now_playing', 'popular', 'top_rated']
  const data = Promise.all(movieList.map(async movie => {
    try {
      const nowPlaying = `https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}`;
      const response = await fetch(nowPlaying);
      const parsed = await response.json()
      const cleaned = cleanDefaultCategories(movie, parsed.results)
      return cleaned
    } catch (error) {
      throw Error(error.message);
    }
  }))
  return {
    trending: data[0],
    nowPlaying: data[1],
    comingSoon: data[2]
  }
};


export {
  getDefaultData
};