import React from 'react'
import Card from '../Card/Card'

const GenreContainer = (results) => {
  const details  = results.map(movie => {
    return <Card movieInfo={movie} />
  })
  return (
    <div>
      { details }
    </div>
  )
}

export default GenreContainer

