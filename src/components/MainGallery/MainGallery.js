import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './MainGallery.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import FavButton from '../../containers/FavButton/FavButton';
export const MainGallery = ({ movies }) => {
	const responsive = {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1024: {
			items: 3
		},
		1200: {
			items: 4
		}
	};

	let details = movies.map(movie => {
		const { title, overview, poster_path } = movie;

		return (
			<div className="mainCard" key={movie.id}>
				<img className="main-card-image" alt={title && ' movie poster'} src={poster_path} />
				<div className="movie-info">
					<h3 className="movie-title"> {title} </h3> <p> {overview} </p> <FavButton movieInfo={movie} />
				</div>
			</div>
		);
	});

	return (
		<section>
			<AliceCarousel
				duration={1000}
				autoPlay={true}
				startIndex={1}
				fadeOutAnimation={true}
				mouseDragEnabled={true}
				responsive={responsive}
				autoPlayInterval={5000}
				buttonsDisabled={true}
				dotsDisabled={true}
				autoPlayDirection="rtl"
				autoPlayActionDisabled={false}>
				{details}
			</AliceCarousel>
		</section>
	);
};

export default MainGallery;
