import React from 'react';
import { connect } from 'react-redux';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import { chooseMovie, setFavorites, toggleFavorites } from '../../actions';
import { Link } from 'react-router-dom';
import './Card.scss';
import PropTypes from 'prop-types';
import FavButton from '../FavButton/FavButton'

export const Card = ({ movieInfo, user, chooseSpecificMovie, setFavorites, toggleFavorites }) => {
	const { title, poster_path, overview, movie_id, isFavorited, genre } = movieInfo;
	const { user_id } = user;

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

export const mapStateToProps = ({ user, specificMovie }) => ({
	user,
	specificMovie
});

export const mapDispatchToProps = dispatch => ({
	chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id)),
	setFavorites: favorites => dispatch(setFavorites(favorites)),
	toggleFavorites: favoriteIds => dispatch(toggleFavorites(favoriteIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
	user: PropTypes.object,
	specificMovie: PropTypes.object,
	chooseSpecificMovie: PropTypes.func,
	setFavorites: PropTypes.func,
	toggleFavorites: PropTypes.func
};
