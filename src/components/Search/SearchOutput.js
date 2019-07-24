import React from 'react';
import './Search.scss';
export const SearchOutput = ({ query }) => {
	console.log('search oputput: ', query);

	const searchResults = query.map(movie => {
		return (
			<div className="search-results">
				<h3> {movie.title} </h3> <p> {movie.overview} </p>
			</div>
		);
	});

	return <div className="search-output-container"> {searchResults} </div>;
};

export default SearchOutput;
