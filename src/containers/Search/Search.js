import React, { Component } from 'react'
import { getMovies } from '../../thunks/getMoviesThunk'
import apiKey from '../../apikey'

export class Search extends Component {
  constructor () {
    super()
    this.state ={
      searchInput:''
    }
  }

  handleChange=(e) => {
    this.setState({searchInput: e.target.value})
  }

  searchMovies = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.state.searchInput}&page=1&include_adult=false`
    const result = await getMovies(this.state.searchInput, searchUrl)
    console.log(result)
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
        <button onClick={this.searchMovies}>Search</button>
      </div>
    )
  }
}

export default Search