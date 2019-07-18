import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAccount, signIn } from '../../actions'
import { sendNewAccount, sendUserLogin } from '../../ApiFetch'
export class UserMenu extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      password:'',
      email:'',
      page:''
    }
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  loginUser = async (e) => {
    e.preventDefault()
    
    try {
      const user = await sendUserLogin(this.state.email, this.state.password)
      const results = await user.data
      this.props.signIn(results)
    } catch (error) {
      this.setState({error})
    }
  }
  
  createNewAccount = async (e) => {
    e.preventDefault()
    await sendNewAccount({...this.state})
    await this.loginUser(e)
  }

  loginMenu = () => {
    //this is ugly, lets refactor later.
    if(this.state.page === 'create-account') {
      return (
        <form>
        <h2>Create a new Account!</h2>
          <label>
            Name:
            <input
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange} />
          </label>
            <label>
              Log in (email):
            <input
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange} />
            </label>
            <label>
              Password:
            <input
                name="password"
                type="password"
                value={this.state.password}
                placeholder="P@$$w0rD"
                onChange={this.handleChange} />
            </label>
            <button onClick={(e) => this.createNewAccount(e)}>Create Account</button>
            <button onClick={() => this.setState({ page: '' })}>Back</button>
          </form >
      ) 
    } else if (this.state.page === 'log-in') {
      return (
        <form>
        <h2> Log In</h2>
          <label>
            Log in (email):
              <input
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
              <input
              name="password"
              type="password"
              value={this.state.password}
              placeholder="P@$$w0rD"
              onChange={this.handleChange} />
          </label>
          <button onClick={(e) => this.loginUser(e)}>Log In</button>
          <button onClick={()=> this.setState({page:''})}>Back</button>
        </form>
      )
    } else {
      return (
        <form>
          <button onClick={() => this.setState({ page:'create-account'})}>Create Account</button>
          <button onClick={() => this.setState({ page: 'log-in'})}>Log In</button>
        </form>
      )
    }
  }


  render() {
    return (
      <div>
        { this.loginMenu() }
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (userInfo) => dispatch(signIn(userInfo))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
