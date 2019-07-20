import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'
import { sendNewAccount, sendUserLogin } from '../../utils//API/ApiFetch'
import './UserMenu.css'
import UserSignup from '../UserMenu/UserSignup'
import UserLogin from '../UserMenu/UserLogin'
export class UserMenu extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      email: '',
      page: '',
      error:''
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
      await this.setState({
        name: '',
        password: '',
        email: '',
        page: '',
        error: ''
      })
    } catch (error) {
      this.setState({ error: error.message})
    }
  }
  
  createNewAccount = async (e) => {
    e.preventDefault()
    await sendNewAccount({...this.state})
    console.log(await sendNewAccount({...this.state}))
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
      if (!this.props.user.id) {
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
      <div>
        { this.loginMenu() }
        <UserLogin state={this.state} loginUser={this.loginUser} handleChange={this.handleChange} />
        <UserSignup state={this.state}  handleChange={this.handleChange} createNewAccount={this.createNewAccount} />
      </div>
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