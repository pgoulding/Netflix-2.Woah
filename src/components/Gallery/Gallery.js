import React, { useState } from 'react';
// import Card from '../Card/Card'
import { connect } from 'react-redux';
import { sendFavorite } from '../../utils/API/ApiFetch';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Gallery.scss';
import FavButton from '../FavButton/FavButton';
const Gallery = ({ data, genre, user }) => {

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
  

	let details = data.map(movie => {
		const { title, overview, backdrop_path } = movie;
		// const { user_id } = user;

		return (
      <article key={movie.id} className='card'>
        <img className="movie-poster" alt={title && ' movie poster'} src={backdrop_path} />
        <div className="movie-info">
          <h3 className="movie-title"> {title} </h3>
          <div className="movie-overview">
            <p> {overview} </p>
          </div>
          <FavButton movieInfo={movie} />
        </div>
      </article>
		);
	});

	return (
		<section>
			<h2>{genre}</h2>
			<AliceCarousel
				duration={1000}
				autoPlay={true}
				startIndex={1}
				fadeOutAnimation={true}
				mouseDragEnabled={true}
				responsive={responsive}
				autoPlayInterval={2000}
				autoPlayDirection="rtl"
				autoPlayActionDisabled={true}
				buttonsDisabled={true}>
				{details}
			</AliceCarousel>
		</section>
	);
};

const mapStateToProps = ({ movies, user }) => ({
	movies,
	user
});

export default connect(mapStateToProps)(Gallery);