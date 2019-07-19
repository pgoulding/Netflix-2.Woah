import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'
import { sendNewAccount, sendUserLogin } from '../../utils//API/ApiFetch'
import './UserMenu.css'
export class UserMenu extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      email: '',
      page: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginUser = async (e) => {
    e.preventDefault()
    try {
      const user = await sendUserLogin(this.state.email, this.state.password)
      const results = await user.data
      this.props.signIn(results)
      this.setState({error: ''})
    } catch (error) {
      this.setState({ error: error.message})
    }
  }
  
  createNewAccount = async (e) => {
    e.preventDefault()
    await sendNewAccount({...this.state})
    await this.loginUser(e)
  }

  signOutUser = async  (e) => {
    e.preventDefault()
    await this.setState({
      name: '',
      password: '',
      email: '',
      page: ''
    })
   await signOut({...this.state})
    console.log(signOut({...this.state}))
    console.log(this.state)
  }

  loginMenu = () => {
    //this is ugly, lets refactor later.
    if(this.state.page === 'create-account' && !this.props.user.id) {
      return (
        <form>
        <h2>Create a new Account!</h2>
          <label>
            Name:
            <input
              className={this.state.error ? 'error' : ''}
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange} />
          </label>
            <label>
              Log in (email):
            <input
                className={this.state.error ? 'error': '' }
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange} />
            </label>
            <label>
              Password:
            <input
                className={this.state.error ? 'error' : ''}
                name="password"
                type="password"
                value={this.state.password}
                placeholder="P@$$w0rD"
                onChange={this.handleChange} />
            </label>
            <button onClick={(e) => this.createNewAccount(e)}>Create Account</button>
            <button onClick={() => this.setState({ page: '' })}>Back</button>
          <div className={!this.state.error ? 'hiddenError' : ''}>
          <p>{this.state.error}</p>
          </div>
          </form >
      ) 
    } else if (this.state.page === 'log-in' && !this.props.user.id) {
      return (
        <form>
        <h2> Log In</h2>
          <label>
            Log in (email):
              <input
              className={this.state.error ? 'error' : ''}
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
              <input
              className={this.state.error ? 'error' : ''}
              name="password"
              type="password"
              value={this.state.password}
              placeholder="P@$$w0rD"
              onChange={this.handleChange} />
          </label>
          <div className={!this.state.error ? 'hiddenError' : ''}>
            <p>{this.state.error}</p>
          </div>
          <button onClick={(e) => this.loginUser(e)}>Log In</button>
          <button onClick={()=> this.setState({page:''})}>Back</button>
        </form>
      )
    } else  if (!this.props.user.id) {
      return (
         <form >
        < button onClick = { () => this.setState({ page: 'create-account'})}> Create Account</ button>
         <button onClick = { () => this.setState({ page: 'log-in'}) } >Log In</button>
        </form>
      )
    } else {
      return (
      <form>
          <button onClick={(e) => this.signOutUser(e)}>Log Out</button>
      </form>
      )
    }
  }


  render() {
    return ( 
      <div > { this.loginMenu() } </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (userInfo) => dispatch(signIn(userInfo)),
  signOut: (state) => dispatch(signOut(state))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)