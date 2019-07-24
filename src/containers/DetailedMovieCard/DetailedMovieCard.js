import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleMovie } from '../../utils/API/ApiFetch';
import './DetailedMovieCard.scss';
import { Link } from 'react-router-dom';

export class DetailedMovieCard extends Component {
	constructor() {
		super();
		this.state = {
			currentMovie: {}
		};
	}

	componentDidMount = async () => {
		console.log('rednering movie details')
		const { specificMovie } = this.props;
		const currentMovie = await fetchSingleMovie(specificMovie.id);
		this.setState({ currentMovie });
	};

	render = () => {
		const {
			title,
			overview,
			poster_path,
			vote_average,
			vote_count,
			revenue,
			runtime,
			homepage,
			release_date,
			genres
		} = this.state.currentMovie;
		let movieGenres;
		if (genres) {
			movieGenres = genres.map(genre => {
				return <Link to={`/genre/${genre.name}`}> {genre.name}</Link>;
			});
		}
		return (
			<article className="specific-container">
				<div className="movie__specific-details">
					<div className="image_container">
						<img alt={overview} src={`http://image.tmdb.org/t/p/w300${poster_path}`} />
						<a target="_blank" rel="noopener noreferrer" href={homepage}>
							Movie Homepage
						</a>
					</div>
					<div className="movie-detail-info">
						<h3>{title}</h3>
						<p>{overview}</p>
						<p>Rating: {vote_average} /10</p>
						<p>Date Released: {release_date}</p>
						<p>Genres: {movieGenres}</p>
						<p>Revenue: ${revenue} USD</p>
						<p>Rumtime: {runtime}</p>
						<p>Times Reviewed: {vote_count}</p>
					</div>
				</div>
			</article>
		);
	};
}

export const mapStateToProps = ({ specificMovie }) => ({
	specificMovie
});

export const mapDispatchToProps = dispatch => ({
	fetchSingleMovie: movie_id => dispatch(fetchSingleMovie(movie_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedMovieCard);
