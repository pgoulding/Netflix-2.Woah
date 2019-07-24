import React from 'react';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import {setFavorites,chooseMovie } from '../../actions';
// import { chooseMovie, setFavorites, addMovie } from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import filledHeart from '../../images/like-filled.png';
import emptyHeart from '../../images/like-empty.png';
import moreDetails from '../../images/clapperboard.png';
import { connect } from 'react-redux';

const FavButton = ({ movieInfo, user, chooseSpecificMovie, setFavorites }) => {
  const { title, movie_id, isFavorited } = movieInfo;
  const { user_id } = user;

  const toggleFav = async movie => {
    if (user.id) {
      const favorites = await fetchUserFavorites(user.id);
      setFavorites(favorites.data);
      console.log(user.favorites);
      const foundMovie = user.favorites.find(favorite => favorite.movie_id === movie_id);
        if (foundMovie) {
          deleteFavorite(user.id, movie_id);
        } else if (!foundMovie && user.id) {
          const favMovie = {
            ...movieInfo,
            user_id
          }
          sendFavorite(favMovie);
          const favorites = await fetchUserFavorites(user.id);
          setFavorites(favorites.data);
      }
    } else {
      alert('Please log in to favorite a movie')
    }
  };

// export const FavButton = ({ movieData, user_id, currentUserFavorites }) => {
// 	const toggle = currentUserFavorites.find(fav => fav.movie_id === movieData.movie_id);
// 	return (
// 		<button movieData={movieData} user_id={user_id}>
// 			{toggle === -1 ? 'Favorite' : 'Unfavorite'}
// 		</button>
// 	);
// };

// export default FavButton;
  
  return (
    <div className="movie-buttons">
      <Link to={`/movies/${title}`}>
        <button onClick={() => chooseSpecificMovie(title, movie_id)}>
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
  );
};

export const mapStateToProps =(state) => ({
  user: state.user,
  specificMovie: state.specificMovie
});

export const mapDispatchToProps=(dispatch) => ({
  chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id)),
  setFavorites: favorites => dispatch(setFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavButton)
