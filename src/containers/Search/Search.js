import React, { Component } from 'react';
import { getMovies } from '../../thunks/getMoviesThunk';
import {searchForMovie} from'../../utils/API/ApiFetch'
// import SearchOutput from './SearchOutput'
import apiKey from '../../apikey'
import { Link } from 'react-router-dom'
export class Search extends Component {
  constructor () {
    super()
    this.state ={
      searchInput:'',
    }
  }

  handleChange=(e) => {
    this.setState({searchInput: e.target.value})
  }

  searchMovies = async (e) => {
    e.preventDefault()
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.state.searchInput}&page=1&include_adult=false`
    const results = await getMovies(this.state.searchInput, searchUrl)
    await console.log(await results)
  }

  render() {
    return (
      <div>
        <input
          name='name'
          placeholder='Search Text'
          type='text'
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
        <button
        onClick={this.searchMovies}
        >
          Search
        </button>
      </div>
    )
  }
}

// export const mapDispatchToProps = (dispatch) => ({
//   searchQuery: (results) => dispatch(search)
// })

export default Search

// export default connect(null, mapDispatchToProps)(Search)