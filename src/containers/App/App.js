import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import { Route } from 'react-router-dom';
import { getMovies } from '../../thunks/getMoviesThunk';
import Header from '../../containers/Header/Header';
import MainGallery from '../../components/MainGallery/MainGallery';
import UserSignup from '../UserMenu/UserSignup';
import UserLogin from '../UserMenu/UserLogin';
import GenreContainer from '../'
// import Error from '../../components/Error/error404';

export class App extends Component {
  componentDidMount() {
    this.getLoadingMovies();
  }

  getLoadingMovies = () => {
    const startingFetch = ['popular', 'now_playing', 'top_rated'];
    startingFetch.forEach(async genre => {
      await this.props.getMovies(genre);
    });
  };

  render() {
    return (
      <main>
        <Header />
        <Route exact path='/' render={() => (
					<section>
						{this.props.movies.now_playing && <MainGallery movies={this.props.movies.now_playing} />}
						{this.props.movies.popular && <Gallery genre={'popular'} data={this.props.movies.popular} />}
						{this.props.movies.top_rated && <Gallery genre={'top_rated'} data={this.props.movies.top_rated} />}
					</section>
				)}/>
        <Route path='/sign_in' component={UserLogin} />
        <Route path='/create_account' component={UserSignup} />
				<Route path='/genre' component={GenreContainer} data={this.props.allGenres} />
				<Route path={`/genre/${this.props.chosenGenre}`} component={GenreContainer} data={this.props.movies[this.props.chosenGenre]} />
				{/* <Route component={<Error />} /> */}
      </main>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  getMovies: (genre, url) => dispatch(getMovies(genre, url)),
  updateMovieState: (results, genre) => dispatch(updateMovies(results, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
