import { getAllMovies } from './actions';

const getData = async () => {
  const url = '';
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    getAllMovies(parsed.results);
  } catch (error) {
    getAllMovies(error.message);
    // throw Error(error.message);
  }
};

export default getData;