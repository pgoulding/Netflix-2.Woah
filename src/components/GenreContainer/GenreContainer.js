import React, { Component } from 'react';
import Card from '../Card/Card';
import { findGenres } from '../../utils/API/ApiFetch';
import { Link } from 'react-router-dom';
import './GenreContainer.css';
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

	populateGenres = () => {
		return this.state.genres.map(genre => {
			return (
				<Link className="category-links" to={`/genre/${genre.name}`}>
					{genre.name}
				</Link>
			);
		});
	};

	render () {
		return <div className="category-link-container"> {this.populateGenres()} </div>;
	}
}

export default GenreContainer;
