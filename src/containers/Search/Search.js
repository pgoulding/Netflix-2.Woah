import React, { Component } from 'react';
// import { getMovies } from '../../thunks/getMoviesThunk';
// import {searchForMovie} from'../../utils/API/ApiFetch'
// import SearchOutput from './SearchOutput'
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
        <Link to={{
          pathname: '/search',
          state: {
            searchInput: this.state.searchInput
          }
        }}>Search</Link>
      </div>
    )
  }
}

export default Search