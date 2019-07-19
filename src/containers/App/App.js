import { getDefaultData } from '../../utils/API/ApiFetch'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import UserMenu from '../UserMenu/UserMenu';
import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import MainGallery from '../../components/MainGallery/MainGallery';

export class App extends Component {
  async componentDidMount() {
    const results = await getDefaultData();
    await this.props.getAllMovies(results);
  }

  render() {
    return (
      <Route exact path='/'
        render={ () => (
          <main>
            <Header />
            <UserMenu />
            <MainGallery />
            {/* {this.props.movies.length && ( <Gallery genre={'Now Playing'} data={this.props.movies[0]} />)} */}
            {this.props.movies.length && ( <Gallery genre={'Popular'} data={this.props.movies[1]} />)}
            {this.props.movies.length && ( <Gallery genre={'Top Rated'} data={this.props.movies[2]} /> )}
          </main>
        )}
      />
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  getAllMovies: movie => dispatch(getAllMovies(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
