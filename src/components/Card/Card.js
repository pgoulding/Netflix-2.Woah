import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import { chooseMovie, setFavorites, addMovie } from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import filledHeart from '../../images/like-filled.png';
import emptyHeart from '../../images/like-empty.png';
import moreDetails from '../../images/clapperboard.png';
import './Card.scss';
import FavButton from '../FavButton/FavButton';

export const Card = ({ movieInfo, user, chooseSpecificMovie, setFavorites }) => {
	const { title, poster_path, overview, movie_id, isFavorited } = movieInfo;
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

const mapStateToProps = ({ user }) => ({
	user
});

const mapDispatchToProps = dispatch => ({
	chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id)),
	setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
