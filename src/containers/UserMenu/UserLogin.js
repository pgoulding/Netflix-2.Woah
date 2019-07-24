import React, { Component } from 'react';
import { sendUserLogin } from '../../utils/API/ApiFetch';
import { connect } from 'react-redux';
import './UserForm.css'
import { Redirect } from 'react-router-dom';
import { setFavorites, toggleFavorites, signIn } from '../../actions';
import { fetchUserFavorites } from '../../utils/API/ApiFetch';

export class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      error: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = async e => {
    e.preventDefault();
    try {
      const userLogin = await sendUserLogin(
        this.state.email,
        this.state.password
      );
      const results = await userLogin.data;
      this.props.signIn(results);
      if (results) {
        console.log(this.props)
        const favorites = await fetchUserFavorites(this.props.user.id);
				const favoriteIds = await [...favorites.data].map(fave => fave.movie_id);
        this.props.setFavorites(favorites.data);
        toggleFavorites(favoriteIds);
      }
      await this.setState({
        name: '',
        password: '',
        email: '',
        error: ''
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.clearInputFields();
  };

  clearInputFields = () => {
    this.setState({
      password: '',
      email: ''
    });
  };

  reflectFavorites = () => {
    this.props.movies.forEach(genre => {
      genre.forEach(movie => {
        this.props.userFavorites.forEach(fav => {
          if (fav.movie_id === movie.id) {
            movie.isFavorited = true;
          }
        });
      });
    });
  };

  render = () => {
    if (this.props.user.id) {
      return <Redirect to='/' />;
    }
    return (
      <div className="form-container">
        <form className="user-form">
          <h2> Log In</h2>
          <label for="email" >
            Email:</label>
            <input
              id="email"
              className={this.state.error ? 'error' : ''}
              name='email'
              value={this.state.email}
              placeholder='Email'
              onChange={e => this.handleChange(e)}
            />
          <label for="password">
            Password:
            </label>
            <input
              id="password"
              className={this.state.error ? 'error' : ''}
              name='password'
              type='password'
              value={this.state.password}
              placeholder='P@$$w0rD'
              onChange={e => this.handleChange(e)}
            />
          <div className={this.state.error ? '' : 'hiddenError'}>
            <p>{this.state.error}</p>
          </div>
          <button onClick={e => this.loginUser(e)}>Submit</button>
        </form>
      </div>
    );
  };
}

export const mapStateToProps = ({ user, movies, userFavorites }) => ({
  user,
  movies,
  userFavorites
});

export const mapDispatchToProps = dispatch => ({
  signIn: results => dispatch(signIn(results)),
  setFavorites: favorites => dispatch(setFavorites(favorites)),
  toggleFavorites: favoriteIds => dispatch(toggleFavorites(favoriteIds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
