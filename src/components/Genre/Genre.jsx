import React, { Component } from 'react';
import { fetchSingleGenre } from '../../utils/API/ApiFetch';
import Card from '../Card/Card';
import './Genre.scss';
class Genre extends Component {
	constructor () {
		super();
		this.state = {
			genreMovies: []
		};
	}
	async componentDidMount () {
    const genreMovies = await fetchSingleGenre(this.props.genre.id, this.props.genre.name);
		this.setState({ genreMovies });
	}

	populateMovies () {
		return this.state.genreMovies.map(movie => {
			return <Card movieInfo={movie} />;
		});
	}

	render () {
		return <div className="movies-container">{this.populateMovies()}</div>;
	}
}

export default Genre;
