import React, { Component } from 'react';
import { findGenres } from '../../utils/API/ApiFetch';
import { Link } from 'react-router-dom';
import './GenreContainer.css';
import { connect } from 'react-redux';
import { getMovies } from '../../thunks/getMoviesThunk';
import apiKey from '../../apikey';
import PropTypes from 'prop-types';

export class GenreContainer extends Component {
	constructor () {
		super();
		this.state = {
			genres: []
		};
	}

	async componentDidMount () {
		const genres = await findGenres();
		this.setState({
			...genres
		});
	}

	handleClick = async (genreID, genre) => {
		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`;
		this.props.getMovies(url, genre);
	};

	populateGenres = () => {
		return this.state.genres.map(genre => {
			return (
				<Link
					className="category-links"
					to={`/genre/${genre.name}`}
					onClick={() => this.handleClick(genre.id, genre.name)}>
					{genre.name}
				</Link>
			);
		});
	};

	render () {
		return <div className="category-link-container"> {this.populateGenres()} </div>;
	}
}

export const mapDispatchToProps = dispatch => ({
	getMovies: (genre, url) => dispatch(getMovies(genre, url))
});

export default connect(null, mapDispatchToProps)(GenreContainer);

GenreContainer.propTypes = {
	getMovies: PropTypes.func
};
