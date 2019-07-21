import React from 'react'

const DetailedMovieCard = (movie) => {
  const { title, imageUrl, overview, vote_count, vote_average, genre_ids} = movie
  return (
    <div>
      <h3>{title}</h3>
      <img alt={overview} src={imageUrl}/>
      <p>{overview}</p>
      <p>Rating: {vote_average} /10</p>
      <p>Times Reviewed: {vote_count}</p>
    </div>
  )
}

export default DetailedMovieCard
