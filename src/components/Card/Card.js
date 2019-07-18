import React from 'react'
import './Card.css'
const Card = ({ movieInfo }) => {
  const { title, poster_path } = movieInfo

  const imageUrl = `http://image.tmdb.org/t/p/w300/${poster_path}`
  return (
    <article className="card">
      <h3>{ title }</h3>
      <img alt={ title && ' movie poster' } src={ imageUrl }/>
    </article>
  )
}

export default Card
