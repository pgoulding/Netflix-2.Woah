import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleMovie } from '../../utils/API/ApiFetch';

export class DetailedMovieCard extends Component {
  constructor() {
    super();
    this.state = {
      currentMovie: {}
    }
  }

  componentDidMount = async () => {
    const { specificMovie } = this.props;
    // console.log(specificMovie);

    const currentMovie = await fetchSingleMovie(specificMovie.id);
    await console.log(currentMovie); 
    this.setState({ currentMovie });
  }

  render = () => {
    const { title, overview, poster_path, vote_average, vote_count } = this.state.currentMovie;
    return (
      <div>
        <h3>{title}</h3>
        <img alt={overview} src={`http://image.tmdb.org/t/p/w300${poster_path}`} />
        <p>{overview}</p>
        <p>Rating: {vote_average} /10</p>
        <p>Times Reviewed: {vote_count}</p>
      </div>
    );
  };
  
};

export const mapStateToProps = ({ specificMovie }) => ({
  specificMovie
});

export const mapDispatchToProps = dispatch => ({
  fetchSingleMovie: (movie_id) => dispatch(fetchSingleMovie(movie_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedMovieCard);
