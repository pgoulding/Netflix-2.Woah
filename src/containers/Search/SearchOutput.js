import React from 'react'
import { Card } from '../../components/Card/Card';
import './Search.scss'
const SearchOutput = (query) => {
  console.log('search oputput: ', query)

   const searchResults = query.query.map(movie => {
      return (
        <div className="search-results">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      )
    }) 

  return (
    <div className="search-output-container">
      {searchResults}
    </div>
  )
}

export default SearchOutput

