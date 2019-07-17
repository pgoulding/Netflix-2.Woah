import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      email:'',
      password:''
    }
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault()
    
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.submitForm(e)}>
          <label>
            Log in (email):
            <input 
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange} />
            <label>
              Password:
            <input
                name="password"
                type="password"
                value={this.state.password}
                placeholder="P@$$w0rD"
                onChange={this.handleChange} />
            </label>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
