import React from 'react';
import { connect } from 'react-redux';
import { sendFavorite } from '../../utils/API/ApiFetch';
import { chooseMovie } from '../../actions';
import { Link } from 'react-router-dom';
import filledHeart from '../../images/like-filled.png'
import emptyHeart from '../../images/like-empty.png'
import moreDetails from '../../images/clapperboard.png'
import './Card.scss'

const Card = ({ movieInfo, user, chooseSpecificMovie, specificMovie }) => {
  const { title, poster_path, overview, movie_id, isFavorited } = movieInfo;
  const { user_id } = user;

  const seeSpecificMovie = () => {
    chooseSpecificMovie(title, movie_id);
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
            <button onClick={(e) => seeSpecificMovie(e)}><img alt="more details" src={moreDetails}/></button>
          </Link>
            <button onClick={() => sendFavorite({ ...movieInfo, user_id })}>
            <img className="favorite__img-button" alt="favorite this movie" src={isFavorited ? filledHeart : emptyHeart} />
            </button>
          </div>
      </div>
      </article>
  );
};

const mapStateToProps = ({ user, specificMovie }) => ({
  user,
  specificMovie
});

const mapDispatchToProps = dispatch => ({
  chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
