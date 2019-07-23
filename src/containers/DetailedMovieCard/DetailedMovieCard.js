import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  fetchSingleMovie
} from '../../utils/API/ApiFetch';
import './DetailedMovieCard.css'
export class DetailedMovieCard extends Component {
  constructor() {
    super();
    this.state = {
      currentMovie: {}
    }
  }

  componentDidMount = async () => {
    const {
      specificMovie
    } = this.props;
    const currentMovie = await fetchSingleMovie(specificMovie.id);
    this.setState({
      currentMovie
    });
  }

  render = () => {
    const {
      title,
      overview,
      poster_path,
      vote_average,
      vote_count
    } = this.state.currentMovie;
    return ( <
      article className = 'specific-container' >
      <
      div className = "movie__specific-details" >
      <
      img alt = {
        overview
      }
      src = {
        `http://image.tmdb.org/t/p/w300${poster_path}`
      }
      /> <
      div className = "movie-detail-info" >
      <
      h3 > {
        title
      } < /h3> <
      p > {
        overview
      } < /p> <
      p > Rating: {
        vote_average
      }
      /10</p >
      <
      p > Times Reviewed: {
        vote_count
      } < /p> <
      /div> <
      /div> <
      /article>
    );
  };

};

export const mapStateToProps = ({
  specificMovie
}) => ({
  specificMovie
});

export const mapDispatchToProps = dispatch => ({
  fetchSingleMovie: (movie_id) => dispatch(fetchSingleMovie(movie_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedMovieCard);