import './App.css';
import { getMoviesByCategory } from '../../utils/API/ApiFetch'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDefaultMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import UserMenu from '../UserMenu/UserMenu';
import { Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import MainGallery from '../../components/MainGallery/MainGallery';

export class App extends Component {
  
  async componentDidMount() {
    const startingFetch = ['popular', 'now_playing', 'top_rated'];
    startingFetch.forEach(async genre => {
      const results = await getMoviesByCategory(genre);
      await this.props.getDefaultMovies(results, genre);
    });
  }

  render() {
    return (
      <main>
        <Header />
        <UserMenu />
          <Route exact path='/'
            render={ () => (
              <section>
              {this.props.movies.popular && <MainGallery movies={this.props.movies.popular}/>}
                {this.props.movies.now_playing && ( <Gallery genre={'now_playing'} data={this.props.movies.now_playing} />)}
                {/* {this.props.movies.popular && ( <Gallery genre={'popular'} data={this.props.movies.popular} />)} */}
                {this.props.movies.top_rated && ( <Gallery genre={'top_rated'} data={this.props.movies.top_rated} /> )}
              </section>
            )}
          />
          {/* <Route path='/categories'
            render={ () => (
              <section>
                {this.props.categories.length && ( <Gallery genre={genre} data={this.props.categories.selected} />)}
              </section>
            )}
          /> */}
      </main>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  getDefaultMovies: (results, genre) => dispatch(getDefaultMovies(results, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
