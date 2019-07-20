import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import { Route } from 'react-router-dom';
import { getMovies } from '../../thunks/getMoviesThunk';
import Header from '../../containers/Header/Header';
import MainGallery from '../../components/MainGallery/MainGallery';
import UserSignup from '../UserMenu/UserSignup'
import UserLogin from '../UserMenu/UserLogin';
// import UserMenu 

export class App extends Component {
	componentDidMount() {
		this.getDefaultData();
    };
	

	getDefaultData = () => {
    const startingFetch = ['popular', 'now_playing', 'top_rated'];
    startingFetch.forEach(genre => {
      console.log(genre)
     this.props.getMovies(genre, null);
      // await this.props.updateMovieState(results, genre);
		});
	};


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
  getMovies: (genre, url) => dispatch(getMovies(genre, url)),
  updateMovieState: (results, genre) => dispatch(updateMovies(results, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
