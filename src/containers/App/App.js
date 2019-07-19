import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import UserMenu from '../UserMenu/UserMenu';
import { Route, Link } from 'react-router-dom';
import { fetchDefaultData } from '../../thunks/fetchDefaultData';
import { fetchCategoryData } from '../../thunks/fetchCategoryData';
import apiKey from '../../apikey';

export class App extends Component {
	componentDidMount() {
		this.getDefaultData();
		this.getCategoryData();
	}

	getDefaultData = () => {
		const movieList = [ 'now_playing', 'popular', 'top_rated' ];
		movieList.forEach(async genre => {
			const defaultMovies = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
			this.props.fetchDefaultData(defaultMovies);
		});
	};

	getCategoryData = async () => {
		// const categoryList = [ 'Action', 'Comedy', 'Documentary', 'Family', 'Horror', 'Romance', 'Science Fiction' ];
		const categoryId = [ 28, 35, 99, 10751, 27, 10749, 878 ];
		categoryId.forEach(async id => {
			const categoryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=6e6bbfd75ee71e1437638b9f37da8fd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;
			this.props.fetchCategoryData(categoryMovies);
		});
	};

	render() {
		return (
			<Route
				exact
				path="/"
				render={() => (
					<main>
						<UserMenu /> {this.props.movies.length && (
							<Gallery genre={'Now Playing'} data={this.props.movies[0]} />
						)}{' '}
						{this.props.movies.length && <Gallery genre={'Popular'} data={this.props.movies[1]} />}{' '}
						{this.props.movies.length && <Gallery genre={'Top Rated'} data={this.props.movies[2]} />}{' '}
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
	fetchDefaultData: movie => dispatch(fetchDefaultData(movie)),
	fetchCategoryData: movie => dispatch(fetchCategoryData(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
