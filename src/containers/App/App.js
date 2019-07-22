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
import GenreContainer from '../../components/GenreContainer/GenreContainer';
// import Error from '../../components/Error/error404';
import { findGenres, fetchSingleGenre } from '../../utils/API/ApiFetch'
import Genre from '../../components/Genre/Genre'
import SearchOutput from '../Search/SearchOutput';
import DetailedMovieCard from '../DetailedMovieCard/DetailedMovieCard';
import apiKey from '../../apikey';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: []
    };
  }
  async componentDidMount() {
    this.getLoadingMovies();
    const genres = await findGenres() 
    this.setState({...genres})
  }
  
  populateRoutes= ()=>  {
    const routes = this.state.genres.map(genre => {
      return <Route path={`/genre/${genre.name}`} render={(props) => <Genre {...props} genre={genre} />} />
    })
    return routes
  }

  // populateRoutes = () => {
  //   const routes = this.state.genres.map(genre => {
  //     return (
  //       <Route
  //         path={`/genre/${genre.name}`}
  //         render={props => <Genre {...props} genre={genre} />}
  //       />
  //     );
  //   });
  //   return routes;
  // };

  getLoadingMovies = () => {
    const startingFetch = ['popular', 'now_playing', 'top_rated'];
    startingFetch.forEach(async genre => {
      const fetchUrl = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
      await this.props.getMovies(fetchUrl, genre);
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
        <Route exact path='/genre' component={GenreContainer} />
        {this.populateRoutes()}
        <Route path='/search' component={SearchOutput} />
				<Route path={`/movies/${this.props.specificMovie.title}`} component={DetailedMovieCard} />
        {/* <Route component={<Error />} /> */}
      </main>
    );
  }
}

const mapStateToProps = ({ movies, specificMovie }) => ({
  movies,
  specificMovie
});

const mapDispatchToProps = dispatch => ({
  getMovies: (genre, url) => dispatch(getMovies(genre, url)),
  updateMovieState: (results, genre) => dispatch(updateMovies(results, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
