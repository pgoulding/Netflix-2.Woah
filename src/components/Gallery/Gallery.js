import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendFavorite } from '../../utils/API/ApiFetch';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Gallery.scss';
import FavButton from '../FavButton/FavButton';

export const Gallery = ({ data, genre, user }) => {
	const reformatGenre = () => {};
	const [ hovered, setHovered ] = useState(false);
	const toggleHover = () => setHovered(!hovered);

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

			<div onMouseLeave={toggleHover} onMouseEnter={toggleHover} key={movie.id} className="card">
				<img alt={title && ' movie poster '} className="movie-poster-carousel" src={backdrop_path} />
				{user_id && (
					<button
						className="send-favorite-btn"
						onClick={() =>
							sendFavorite({
								...movie,
								user_id
							})}>
						Favorite Movie
					</button>
				)}
				<div className="details">
					<h3> {title} </h3> <p> {overview} </p>
				</div>
			</div>
		);
	});

	return (
		<section>
			<h2> {genre} </h2>
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

export const mapStateToProps = ({ movies, user }) => ({
	movies,
	user
});

export default connect(mapStateToProps)(Gallery);