import React, {Component} from 'react'
import Card from '../../components/Card/Card'
import {searchForMovie} from '../../utils/API/ApiFetch'

class SearchOutput  extends Component {
  constructor() {
    super()
    this.state={
     results:[]
    }
  }
  async componentDidMount() {
    const results = await searchForMovie(this.props.searchTerm)
    this.setState({results})
  }

  searchedMovies = () => {
    this.state.results.map(movie => {
      return <Card movieInfo={movie} />
    })
  } 
  
  render () {
    return (
      <div>
        {this.searchedMovies}
      </div>
    )
  }
}

export default SearchOutput
