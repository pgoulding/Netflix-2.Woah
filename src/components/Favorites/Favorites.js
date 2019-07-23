import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import { Redirect } from 'react-router-dom';

export class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteMovs: []
    };
  }
  // console.log('movies', movies);

  // findFaves = () => {
  //   if (!this.props.user.id) {
  //     return <Redirect to="/log_in" />
  //   } else {
  //     const faves = this.props.user.favorites.map(fave => fave.movie_id);
  //     let faveMovs = Object.keys(this.props.movies).reduce((shownMovies, genre) => {
  //       this.props.movies[genre].forEach(movie => {
  //         if (faves.includes(movie.movie_id)) {
  //           console.log('movie', movie);
  //           shownMovies.push(movie);
  //         }
  //       });
  //       console.log('shownMovies', shownMovies);
  //       return shownMovies;
  //     }, []);
  //     this.setState({favoriteMovs: [...faveMovs]}, () => console.log('state', this.state));
  //   }
  // };

  // const populateFaves = () => {
  //   const movs = findFaves();
  //   console.log('movs', movs);
  //   return movs.map(movie => {
	// 		return <Card movieInfo={movie} />;
	// 	});
  // }
  // render = () => {
  //   return <div className='movies-container'>{this.findFaves()}</div>;
  // }
};

export const mapStateToProps = ({user, movies}) => ({
  user,
  movies
});

export default connect(mapStateToProps, null)(Favorites);
