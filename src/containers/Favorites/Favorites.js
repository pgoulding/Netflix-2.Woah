import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Favorites extends Component {
	constructor () {
		super();
		this.state = {
			favoriteMovs: []
		};
	}

	componentDidMount () {
		if (this.props.user.id) {
			this.updateMovies();
		}
	}

	updateMovies () {
		setInterval(
			() =>
				this.setState({
					favoriteMovs: this.props.user.favorites
				}),
			300
		);
	}

	findFaves = () => {
		if (!this.props.user.id) {
			return <Redirect to="/log_in" />;
		} else {
			return this.state.favoriteMovs.map(movie => {
				return <Card movieInfo={movie} />;
			});
		}
	};

	render = () => {
		return (
			<div className="movies-container" onClick={() => this.updateMovies()}>
				{' '}
				{this.findFaves()}{' '}
			</div>
		);
	};
}

export const mapStateToProps = ({ user, movies }) => ({
	user,
	movies
});

export default connect(mapStateToProps, null)(Favorites);

Favorites.propTypes = {
	user: PropTypes.object,
	movies: PropTypes.array
};
