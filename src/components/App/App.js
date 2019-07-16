import './App.css';
import getData from '../../ApiFetch'
import React, { Component } from 'react'

export class App extends Component {

  async componentDidMount() {
    const something = await getData()
    console.log(something)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App


