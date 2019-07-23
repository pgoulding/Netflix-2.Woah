import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';
import { sendFavorite } from '../../utils/API/ApiFetch';
import { chooseMovie } from '../../actions';
import { Link } from 'react-router-dom';

export class Card extends Component {
  render() {
    const { title, poster_path, movie_id } = movieInfo;
    const { user_id } = user;

    const seeSpecificMovie = () => {
      chooseSpecificMovie(title, movie_id);
    };

    return (
      <article className='movie-card'>
        <h3>{title}</h3>
        <img alt={title && ' movie poster'} src={poster_path} />
        <Link to={`/movies/${title}`}>
          <button className='view-details-btn' onClick={(e) => seeSpecificMovie(e)}>View Details</button>
        </Link>
        {user.id && (
          <button onClick={() => sendFavorite({ ...movieInfo, user_id })}>
            Favorite Movie
          </button>
        )}
      </article>
    );
  }
};

const mapStateToProps = ({ user, specificMovie }) => ({
  user,
  specificMovie
});

const mapDispatchToProps = dispatch => ({
  chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
