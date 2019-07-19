import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import { connect } from 'react-redux'


const MainGallery = ({ movies }) => {
  // const { popular } = movies
  console.log(movies)

  const movieBackdrop = movies.map(movie => {
    const movieImage = `http://image.tmdb.org/t/p/original${movie.backdrop_path}`
    return <div data-src={movieImage} />
  })
  return (
      <AwesomeSlider cssModule={AwsSliderStyles}>
        { movieBackdrop }
      </AwesomeSlider>
  )
}

export default MainGallery
// export default connect(mapStateToProps)(MainGallery)
