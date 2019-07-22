import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './MainGallery.css';
import 'react-alice-carousel/lib/alice-carousel.css';
const MainGallery = ({ movies }) => {
	const responsive = {
		0: {
			items: 1
		},
		800: {
			items: 2
		},
		1600: {
			items: 3
		}
	};

	let details = movies.map(movie => {
		const { title, overview, poster_path } = movie;

		return (
			<div className="mainCard" key={movie.id}>
				<img alt={title && ' movie poster'} src={poster_path} />
				<div className="details-hover">
					<h3>{title}</h3>
					<p>{overview}</p>
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
				autoPlayActionDisabled={false}
				>
				{details}
			</AliceCarousel>
		</section>
	);
};

export default MainGallery;
