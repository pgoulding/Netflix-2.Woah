import React from 'react';
import { connect } from 'react-redux';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import { chooseMovie, setFavorites, toggleFavorites } from '../../actions';
import { Link } from 'react-router-dom';
import filledHeart from '../../images/like-filled.png';
import emptyHeart from '../../images/like-empty.png';
import moreDetails from '../../images/clapperboard.png';
import './Card.scss';

export const Card = ({ movieInfo, user, chooseSpecificMovie, setFavorites, toggleFavorites }) => {
	const { title, poster_path, overview, movie_id, isFavorited, genre } = movieInfo;
	const { user_id } = user;
	const seeSpecificMovie = () => {
		chooseSpecificMovie(title, movie_id);
	};

	const toggleFav = async movie => {
    if (!user.id) {
			alert('Please log in to favorite a movie!')
		} else {
				const favorites = await fetchUserFavorites(user_id);
				const favoriteIds = await [...favorites.data].map(fave => fave.movie_id)
				;
				// console.log('ids', favoriteIds);
        setFavorites(favorites.data);
        console.log('genre:', genre)
        // toggleFavorites({genre, favoriteIds});
			const foundMovie = user.favorites.find(favorite => favorite.movie_id === movie_id);
			if (foundMovie) {
				await deleteFavorite(user_id, movie_id);
				const favorites = await fetchUserFavorites(user_id);
				const favoriteIds = await [...favorites.data].map(fave => fave.movie_id);
				setFavorites(favorites.data);
				// toggleFavorites({genre, favoriteIds});
			} else if (!foundMovie) {
				await sendFavorite({
					...movieInfo,
					user_id
				});
				const favorites = await fetchUserFavorites(user_id);
				const favoriteIds = await [...favorites.data].map(fave => fave.movie_id);
				setFavorites(favorites.data);
        // toggleFavorites({genre, favoriteIds});
			}
		}
		//this should not be a console log
	};

	return (
		<article className={isFavorited ? 'movie-card favorited' : 'movie-card'}>
			<img className="movie-poster" alt={title && ' movie poster'} src={poster_path} />
			<div className="movie-info">
				<h3 className="movie-title"> {title} </h3>
				<div className="movie-overview">
					<p> {overview} </p>
				</div>
				<div className="movie-buttons">
					<Link to={`/movies/${title}`}>
						<button onClick={() => seeSpecificMovie()}>
							<img alt="more details" src={moreDetails} />
						</button>
					</Link>
					<button onClick={() => toggleFav(movie_id)}>
						<img
							className="favorite__img-button"
							alt="favorite this movie"
							src={isFavorited ? filledHeart : emptyHeart}
						/>
					</button>
				</div>
			</div>
		</article>
	);
};

const mapStateToProps = ({ user }) => ({
	user
});

export const mapDispatchToProps = dispatch => ({
	chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id)),
	setFavorites: favorites => dispatch(setFavorites(favorites)),
	toggleFavorites: favoriteIds => dispatch(toggleFavorites(favoriteIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
