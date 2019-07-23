import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { Redirect } from 'react-router-dom';

export class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteMovs: []
    };
  }

  componentDidMount() {
    if (this.props.user.id) {
      this.updateMovies();
    }
  }

  updateMovies() {
    this.setState({ favoriteMovs: this.props.user.favorites });
  }

  findFaves = () => {
    if (!this.props.user.id) {
      return <Redirect to='/log_in' />;
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
    );
  };
}

export const mapStateToProps = ({ user, movies }) => ({
  user,
  movies
});

export default connect(mapStateToProps, null)(Favorites);

// import React, {Component} from 'react'
// import { connect } from 'react-redux'
// import {Redirect} from 'react-router-dom'

// class Favorites extends Component {
//   render () {
//   if (!this.props.user.id) {
//     return <Redirect to="/log_in" />
//   }
//     return (
//       <h3>Favorite</h3>
//     )
//   }
// }

// export const mapStateToProps = state => ({
//   user: state.user
// });

// export default connect(mapStateToProps)(Favorites)
