import React from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Gallery.scss';
import FavButton from '../FavButton/FavButton';
import PropTypes from 'prop-types';

export const Gallery = ({ data, genre, user }) => {

  const responsive = {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1024: {
      items: 3
    }
  };

  const reformatGenreName = (genreName) => {
    return genreName.toUpperCase().split('_').join(' ')
  }

  let details = data.map(movie => {
    const { title, overview, backdrop_path } = movie;
    return (
      <div
        key={movie.id}
        className='card'
      >
        <img
          alt={title && ' movie poster '}
          className='movie-poster'
          src={backdrop_path}
        />
        <div className='movie-info'>
          <h3 className="movie-title"> {title} </h3> 
          <p> {overview} </p>
          <FavButton movieInfo={movie} />
        </div>
      </div>
    );
  });

  return (
    <section>
      <h2 className="genre-name"> {reformatGenreName(genre)} </h2>
      <AliceCarousel
        duration={1000}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection='rtl'
        autoPlayActionDisabled={true}
        buttonsDisabled={true}
      >
        {details}
      </AliceCarousel>
    </section>
  );
};

export const mapStateToProps = ({ movies, user }) => ({
  movies,
  user
});

export default connect(mapStateToProps)(Gallery);

Gallery.propTypes = {
	movies: PropTypes.array,
	user: PropTypes.object
};
