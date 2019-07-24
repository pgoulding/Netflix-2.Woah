import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import FavButton from '../../containers/FavButton/FavButton'

export const Card = ({ movieInfo }) => {
	const { title, poster_path, overview, isFavorited} = movieInfo;

	return (
		<article className={isFavorited ? 'movie-card favorited' : 'movie-card'}>
			<img className="movie-poster" alt={title && ' movie poster'} src={poster_path} />
			<div className="movie-info">
				<h3 className="movie-title"> {title} </h3>
				<div className="movie-overview">
					<p> {overview} </p>
				</div>
				<FavButton movieInfo={movieInfo} />
			</div>
		</article>
	);
};

export default Card;


Card.propTypes = {
  movieInfo:PropTypes.object
};
