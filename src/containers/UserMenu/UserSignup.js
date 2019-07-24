import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNewAccount } from '../../utils//API/ApiFetch';
import { signIn } from '../../actions';
import { Redirect } from 'react-router-dom';
import './UserForm.css'
export class UserSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      error: '',
      toSignIn: false,
    };
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createNewAccount = async e => {
    e.preventDefault();
    if (this.state.email === (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      const response = await sendNewAccount(this.state);
      if (await response.ok) {
        this.setState({
          toSignIn: true
        })
      } else {
        this.setState({
          error: 'Sorry, we failed to create your account. Your email or password may already be in use. Please use a different email or password, or attempt to login, as you may already have an account.'
        })
      }
      this.clearInputFields();
      this.props.history.push('/')
    } else {
      this.setState({error: 'Please enter a valid email address'})
    }
  };

  clearInputFields = () => {
    this.setState({
      password: '',
      email: '',
      name: ''
    });
  }

  render = () => {
    if (this.state.toSignIn) {
      return <Redirect to='/sign_in' />
    }
    return (
      <div className="form-container">
        <form className="user-form">
          <h2>Create a new Account!</h2>
          <label for="name">
            Name:
            </label>
            <input
              id="name"
              className={this.state.error ? 'error' : ''}
              name='name'
              value={this.state.name}
              placeholder='Name'
              onChange={e => this.handleChange(e)}
            />
          <label for="email">
            Email:
            </label>
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
          <button onClick={e => this.createNewAccount(e)}>Submit</button>
          <div className={this.state.error ? '' : 'hiddenError'}>
            <p>{this.state.error}</p>
          </div>
        </form>
      </div>
    );
  };
}

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  signIn: results => dispatch(signIn(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSignup);
