import React, { Component } from 'react';
import { sendUserLogin } from '../../utils/API/ApiFetch';
import { signIn } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setFavorites } from '../../actions';
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
        // fetch faves
        const favorites = await fetchUserFavorites(this.props.user.id);
        this.props.setFavorites(favorites.data);
        this.props.history.push('/');
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

  render = () => {
    if (this.props.user.id) {
      return <Redirect to='/' />;
    }
    return (
      <form>
        <h2> Log In</h2>
        <label>
          Log in (email):
          <input
            className={this.state.error ? 'error' : ''}
            name='email'
            value={this.state.email}
            placeholder='Email'
            onChange={e => this.handleChange(e)}
          />
        </label>
        <label>
          Password:
          <input
            className={this.state.error ? 'error' : ''}
            name='password'
            type='password'
            value={this.state.password}
            placeholder='P@$$w0rD'
            onChange={e => this.handleChange(e)}
          />
        </label>
        <div className={this.state.error ? '' : 'hiddenError'}>
          <p>{this.state.error}</p>
        </div>
        <button onClick={e => this.loginUser(e)}>Log In</button>
      </form>
    );
  };
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  signIn: results => dispatch(signIn(results)),
  setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
