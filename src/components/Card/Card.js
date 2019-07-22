import React from 'react';
import { connect } from 'react-redux';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import { chooseMovie, setFavorites } from '../../actions';
import { Link } from 'react-router-dom';
import filledHeart from '../../images/like-filled.png'
import emptyHeart from '../../images/like-empty.png'
import moreDetails from '../../images/clapperboard.png'
import './Card.scss'

const Card = ({ movieInfo, user, chooseSpecificMovie, specificMovie, userFavorites, setFavorites }) => {
    const { title, poster_path, overview, movie_id, isFavorited } = movieInfo;
  const { user_id } = user;

  // console.log('top', movie_id);

  const seeSpecificMovie = () => {
    chooseSpecificMovie(title, movie_id);
  };

  const toggleFav = async () => {
    if (!userFavorites.length) {
      sendFavorite({ ...movieInfo, user_id });
    }
    userFavorites.forEach(fav => {
      if (fav.movie_id === movie_id) {
        deleteFavorite(user_id, movie_id);
      } else {
        sendFavorite({ ...movieInfo, user_id });
      }
    });
    const favorites = await fetchUserFavorites(user_id);
    setFavorites(favorites.data);
  };


  return (
    <article className={isFavorited ? 'movie-card favorited' : 'movie-card'}>
        <img className="movie-poster" alt={title && ' movie poster'} src={poster_path} />
      <div className="movie-info">
        <h3 className='movie-title'>{title}</h3>
        <div className="movie-overview">
        <p>{overview}</p>
        </div>
          <div className='movie-buttons'>
          <Link to={`/movies/${title}`}>
            <button onClick={() => seeSpecificMovie()}><img alt="more details" src={moreDetails}/></button>
          </Link>
            <button onClick={() => toggleFav()}>
            <img className="favorite__img-button" alt="favorite this movie" src={isFavorited ? filledHeart : emptyHeart} />
            </button>
          </div>
      </div>
      </article>
  );
};

const mapStateToProps = ({ user, specificMovie, userFavorites }) => ({
  user,
  specificMovie,
  userFavorites
});

const mapDispatchToProps = dispatch => ({
  chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id)),
  setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);