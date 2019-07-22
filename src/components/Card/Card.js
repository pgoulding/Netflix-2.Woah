import React from 'react';
import { connect } from 'react-redux';
import './Card.css';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import { chooseMovie, setFavorites } from '../../actions';
import { Link } from 'react-router-dom';

const Card = ({ movieInfo, user, chooseSpecificMovie, specificMovie, userFavorites, setFavorites }) => {
  const { title, poster_path, movie_id } = movieInfo;
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
    <article className='movie-card'>
      <h3>{title}</h3>
      <img alt={title && ' movie poster'} src={poster_path} />
      <Link to={`/movies/${title}`}>
        <button onClick={() => seeSpecificMovie()}>View Details</button>
      </Link>
      {user.id && <button onClick={() => toggleFav()}>Favorite Movie</button>}
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