import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import { searchForMovie } from '../../utils/API/ApiFetch';
import SearchOutput from './SearchOutput';

export class Search extends Component {
	constructor () {
		super();
		this.state = {
			searchInput: '',
			searchResults: []
		};
	}

	handleChange = e => {
		this.setState({
			searchInput: e.target.value
		});
	};

	searchMovies = async e => {
		e.preventDefault();
		const results = await searchForMovie(this.state.searchInput);
		this.setState({
			searchResults: [ ...results ]
		});
		await console.log(await results);
	};

	render () {
		return (
			<article>
				<div
					className={!this.state.searchResults.length ? 'search-input-container' : ' search-input-container expanded'}>
					<h2> Search Movies by Name </h2>
					<div>
						<input
							name="search"
							placeholder="Search Text"
							type="text"
							value={this.state.searchInput}
							onChange={this.handleChange}
						/>
						<button onClick={this.searchMovies}> Search </button>
					</div>
				</div>
				{this.state.searchResults.length ? <SearchOutput query={this.state.searchResults} /> : null}
			</article>
		);
	}
}

export default Search;
