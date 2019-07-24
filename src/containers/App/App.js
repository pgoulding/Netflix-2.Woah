import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovies } from '../../actions';
import Gallery from '../../containers/Gallery/Gallery';
import { Route, Switch } from 'react-router-dom';
import { getMovies } from '../../thunks/getMoviesThunk';
import Header from '../../containers/Header/Header';
import MainGallery from '../../components/MainGallery/MainGallery';
import UserSignup from '../UserMenu/UserSignup';
import UserLogin from '../UserMenu/UserLogin';
import GenreContainer from '../../containers/GenreContainer/GenreContainer';
import { findGenres, fetchSingleGenre } from '../../utils/API/ApiFetch';
import Genre from '../../components/Genre/Genre';
import Search from '../../components/Search/Search';
import DetailedMovieCard from '../DetailedMovieCard/DetailedMovieCard';
import apiKey from '../../apikey';
import Favorites from '../Favorites/Favorites';
import Error from '../../components/Error/Error';
import PropTypes from 'prop-types';

export class App extends Component {
	constructor () {
		super();
		this.state = {
			genres: []
		};
	}
	async componentDidMount () {
		this.getLoadingMovies();
		const genres = await findGenres();
		this.setState({
			...genres
		});
	}

	populateRoutes = () => {
		const routes = this.state.genres.map(genre => {
			return <Route path={`/genre/${genre.name}`} render={props => <Genre {...props} genre={genre} />} />;
		});
		return routes;
	};

	getLoadingMovies = () => {
		const startingFetch = [ 'popular', 'now_playing', 'top_rated' ];
		startingFetch.forEach(async genre => {
			const fetchUrl = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
			await this.props.getMovies(fetchUrl, genre);
		});
	};

	render () {
		return (
			<main>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<section>
								{this.props.movies.now_playing && <MainGallery movies={this.props.movies.now_playing} />}
								{this.props.movies.popular && <Gallery genre={'popular'} data={this.props.movies.popular} />}
								{this.props.movies.top_rated && <Gallery genre={'top_rated'} data={this.props.movies.top_rated} />}
							</section>
						)}
					/>
					<Route path="/favorites" component={Favorites} />
          <Route path="/log_in" component={UserLogin} />
					<Route path="/create_account" component={UserSignup} />
					<Route exact path="/genre" component={GenreContainer} /> {this.populateRoutes()}
					<Route path="/search" component={Search} />
					<Route path={`/movies/${this.props.specificMovie.title}`} component={DetailedMovieCard} />
					<Route component={Error} />
				</Switch>
			</main>
		);
	}
}

export const mapStateToProps = ({ movies, specificMovie }) => ({
	movies,
	specificMovie
});

export const mapDispatchToProps = dispatch => ({
	getMovies: (genre, url) => dispatch(getMovies(genre, url)),
	updateMovieState: (results, genre) => dispatch(updateMovies(results, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
	movies: PropTypes.array,
	specificMovie: PropTypes.object,
	getMovies: PropTypes.func,
	updateMovieState: PropTypes.func
};
