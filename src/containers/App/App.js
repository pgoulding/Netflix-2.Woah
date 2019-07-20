import './App.css';
import { getMovies } from '../../utils/API/ApiFetch'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import UserMenu from '../UserMenu/UserMenu';
import { Route, Link } from 'react-router-dom';
import { fetchDefaultData } from '../../thunks/fetchDefaultData';
import { fetchCategoryData } from '../../thunks/fetchCategoryData';
import apiKey from '../../apikey';

export class App extends Component {
	componentDidMount() {
		this.getDefaultData();
    // this.getCategoryData();
    const startingFetch = ['popular', 'now_playing', 'top_rated'];
    startingFetch.forEach(async genre => {
      const results = await getMovies(genre, null);
      await this.props.updateMovieState(results, genre);
    });
	}

	getDefaultData = () => {
		const movieList = [ 'now_playing', 'popular', 'top_rated' ];
		movieList.forEach(async genre => {
			const defaultMovies = `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}`;
			this.props.fetchDefaultData(defaultMovies);
		});
	};

	// getCategoryData = async () => {
	// 	// const categoryList = [ 'Action', 'Comedy', 'Documentary', 'Family', 'Horror', 'Romance', 'Science Fiction' ];
	// 	const categoryId = [ 28, 35, 99, 10751, 27, 10749, 878 ];
	// 	categoryId.forEach(async id => {
	// 		const categoryMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;
	// 		this.props.fetchCategoryData(categoryMovies);
	// 	});
	// };

	render() {
		return (
      <main>
        <Header />
        <Route exact path='/'
          render={() => (
            <section>
              {this.props.movies.popular && <MainGallery movies={this.props.movies.popular} />}
              {this.props.movies.now_playing && (<Gallery genre={'now_playing'} data={this.props.movies.now_playing} />)}
              {/* {this.props.movies.popular && ( <Gallery genre={'popular'} data={this.props.movies.popular} />)} */}
              {this.props.movies.top_rated && (<Gallery genre={'top_rated'} data={this.props.movies.top_rated} />)}
            </section>
          )}
        />
        {/* <Route path='/categories'
            render={ () => (
              <section>
                {this.props.categories.length && ( <Gallery genre={genre} data={this.props.categories.selected} />)}
              </section>
            )}
          /> */}
        <Route exact path='/sign_in' render={UserLogin} />
        <Route exact path='/create_account' component={UserSignup} />
      </main>
		);
	}
}

const mapStateToProps = ({ movies }) => ({
	movies
});

const mapDispatchToProps = dispatch => ({
	fetchDefaultData: movie => dispatch(fetchDefaultData(movie)),
	fetchCategoryData: movie => dispatch(fetchCategoryData(movie)),
  updateMovieState: (results, genre) => dispatch(updateMovies(results, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
