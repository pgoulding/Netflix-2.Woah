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
      email:''
    }
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = async (e) => {
    e.preventDefault()
    // await sendNewAccount({...this.state})
    // await console.log(user)
    
    try {
      const user = await sendUserLogin(this.state.email, this.state.password)
      const results = await user.data
      this.props.signIn(results)
    } catch (error) {
      this.setState({error})
    }
    // this.props.createAccount({thisstae})
  }


  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.submitForm(e)}>
          <label>
            Name:
            <input
              name="name"
              type="text"
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
            <button onClick={(e)=> this.submitForm(e)}>click me</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = (dispatch) => ({
  // createAccount: (userInfo) => dispatch(createAccount(userInfo)),
  signIn: (userInfo) => dispatch(signIn(userInfo))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
