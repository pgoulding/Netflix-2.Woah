import './App.css';
import { getDefaultData } from '../../utils/API/ApiFetch'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions';
import Gallery from '../../components/Gallery/Gallery';
import UserMenu from '../UserMenu/UserMenu';
import { Route, Link } from 'react-router-dom';

export class App extends Component {
  async componentDidMount() {
    const results = await getDefaultData();
    await this.props.getAllMovies(results);
  }

  render() {
    return (
      <main>
        <UserMenu />
          <Route exact path='/'
            render={ () => (
              <section>
                {this.props.movies.length && ( <Gallery genre={'Now Playing'} data={this.props.movies[0]} />)}
                {this.props.movies.length && ( <Gallery genre={'Popular'} data={this.props.movies[1]} />)}
                {this.props.movies.length && ( <Gallery genre={'Top Rated'} data={this.props.movies[2]} /> )}
              </section>
            )}
          />
          <Route path='/categories'
            render={ () => (
              <section>
                {this.props.categories.length && ( <Gallery genre={'Action'} data={this.props.categories[0]} />)}
                {this.props.categories.length && ( <Gallery genre={'Comedy'} data={this.props.categories[1]} />)}
                {this.props.categories.length && ( <Gallery genre={'Documentary'} data={this.props.categories[2]} /> )}
                {this.props.categories.length && ( <Gallery genre={'Family'} data={this.props.categories[3]} /> )}
                {this.props.categories.length && ( <Gallery genre={'Horror'} data={this.props.categories[4]} /> )}
                {this.props.categories.length && ( <Gallery genre={'Romance'} data={this.props.categories[5]} /> )}
                {this.props.categories.length && ( <Gallery genre={'Science Fiction'} data={this.props.categories[6]} /> )}
              </section>
            )}
          />
      </main>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  getAllMovies: movie => dispatch(getAllMovies(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
