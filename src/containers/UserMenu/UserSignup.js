import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNewAccount, sendUserLogin } from '../../utils//API/ApiFetch';
import { signIn } from '../../actions';

export class UserSignup extends Component {
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

  createNewAccount = async e => {
    e.preventDefault();
    await sendNewAccount(this.state);
    // console.log(await sendNewAccount({ ...this.state }));
    await this.loginUser(e);
  };

  loginUser = async e => {
    e.preventDefault();
    try {
      const user = await sendUserLogin(this.state.email, this.state.password);
      const results = await user.data;
      this.props.signIn(results);
      await this.setState({
        name: '',
        password: '',
        email: '',
        page: '',
        error: ''
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render = () => {
    return (
      <form>
        <h2>Create a new Account!</h2>
        <label>
          Name:
          <input
            className={this.state.error ? 'error' : ''}
            name='name'
            value={this.state.name}
            placeholder='Name'
            onChange={e => this.handleChange(e)}
          />
        </label>
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
        <button onClick={e => this.createNewAccount(e)}>Create Account</button>
        <div className={!this.state.error ? 'hiddenError' : ''}>
          <p>{this.state.error}</p>
        </div>
      </form>
    );
  };
}

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  signIn: results => dispatch(signIn(results))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignup);
