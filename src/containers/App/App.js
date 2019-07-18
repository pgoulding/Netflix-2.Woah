import './App.css';
import { getDefaultData } from '../../ApiFetch';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions';

export class App extends Component {
	async componentDidMount() {
		const movieData = await getDefaultData();
		console.log('movieData', movieData);
		this.props.getAllMovies(movieData);
		// this.props.addMovies(movies)
	}

	render() {
		return <div />;
	}
}

const mapStateToProps = ({ movies }) => ({
	movies
});

const mapDispatchToProps = dispatch => ({
	getAllMovies: movieData => dispatch(getAllMovies(movieData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
