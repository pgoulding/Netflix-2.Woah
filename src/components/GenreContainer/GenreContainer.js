import React, { Component } from 'react'
import Card from '../Card/Card'
import { findGenres } from '../../utils/API/ApiFetch'
import {Link} from 'react-router-dom'
import './GenreContainer.css'
export class GenreContainer extends Component  {
  constructor(){
    super()
    this.state={
      genres:[]
    }
  }
  async componentDidMount(){
    const genres = await findGenres()
    this.setState({...genres})
  }



  populateGenres() {
    return this.state.genres.map(genre => {
      return <Link className='category-links' to={`/genre/${genre.name}`}>{genre.name}</Link>
    })
  }

  // async handleSubmit (e) {
  //   e.preventDefault()
  //   await fetchSingleGenre(e.target.id)
  //   return 
  // }
  // const details  = results.map(movie => {

  //   // return <Card movieInfo={movie} />
  // })
  render() {
    return (
      <div className='category-link-container'>
        { this.populateGenres() }
      </div>
    )
  }
}

export default GenreContainer

