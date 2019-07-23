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

  componentDidMount() {
    if(this.props.user.id) {
      // const faves = this.props.user.favorites.map(fave => fave.movie_id);
      // // console.log('faves', faves);
      // let faveMovs = Object.keys(this.props.movies).reduce((shownMovies, genre) => {
      //   this.props.movies[genre].forEach(movie => {
      //     if (faves.includes(movie.movie_id)) {
      //       shownMovies.push(movie);
      //     }
      //   });
      //   return shownMovies;
      // }, []);
      // console.log('fm', faveMovs);
     this.updateMovies()
    }
  }

  updateMovies() {
    this.setState({ favoriteMovs: this.props.user.favorites });
  }

  findFaves = () => {
    if (!this.props.user.id) {
      return <Redirect to="/log_in" />
    } else {
      return this.state.favoriteMovs.map(movie => {
        return <Card movieInfo={movie} />;
      });
    }
  };

  render = () => {
    return (
      <div className='movies-container' onClick={() => this.updateMovies()}>
        {this.findFaves()}
      </div>
    ) 
  }
};

export const mapStateToProps = ({user, movies}) => ({
  user,
  movies
});

export default connect(mapStateToProps, null)(Favorites);
