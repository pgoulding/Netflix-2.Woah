import React, { Component } from 'react'
import { fetchSingleGenre } from '../../utils/API/ApiFetch'
import Card from '../Card/Card'
class Genre extends Component {
  constructor() {
    super()
    this.state = {
      genreMovies: []
    }
  }
  async componentDidMount() {
    const genreMovies = await fetchSingleGenre(this.props.genre.id)
    this.setState({ genreMovies })
  }

  populateMovies() {
    return this.state.genreMovies.map(movie => {
      return <Card movieInfo={movie} />
    })
  }


  render() {
    return (
      <div>
        {this.populateMovies()}
      </div>
    )
  }
}

export default Genre
